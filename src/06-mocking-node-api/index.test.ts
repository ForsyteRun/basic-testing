import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  let callback: jest.Mock;
  const time = 1000;

  beforeAll(() => {
    jest.useFakeTimers();
    callback = jest.fn();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const timer = jest.spyOn(global, 'setTimeout');

    doStuffByTimeout(callback, time);

    jest.advanceTimersByTime(time);

    expect(timer).toHaveBeenCalledWith(callback, time);
  });

  test('should call callback only after timeout', () => {
    doStuffByTimeout(callback, time);

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(time);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  let callback: jest.Mock;
  const time = 1000;

  beforeEach(() => {
    jest.useFakeTimers();
    callback = jest.fn();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const timer = jest.spyOn(global, 'setInterval');

    doStuffByInterval(callback, time);

    jest.advanceTimersByTime(time);

    expect(timer).toHaveBeenCalledWith(callback, time);

    jest.useRealTimers();
  });

  test('should call callback multiple times after multiple intervals', () => {
    doStuffByInterval(callback, time);

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(time);

    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(time);

    expect(callback).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(time);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const pathToFile = './index';

    const mockedJoin = jest.fn((...args) => args.join('/'));
    require('path').join = mockedJoin;

    await readFileAsynchronously(pathToFile);

    expect(mockedJoin).toHaveBeenCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = './unReachiblePath';

    const mockedJoin = jest.fn((...args) => args.join('/'));
    require('path').join = mockedJoin;

    const result = await readFileAsynchronously(pathToFile);

    expect(result).toBeNull;
  });

  test('should return file content if file exists', async () => {
    const expectedContent = 'File content';
    const pathToFile = './pathToFile';

    require('path').join = jest.fn((...args) => args.join('/'));
    require('fs').existsSync = jest.fn(() => true);
    require('fs/promises').readFile = jest.fn(() => expectedContent);

    const result = await readFileAsynchronously(pathToFile);

    expect(result).toEqual('File content');
  });
});
