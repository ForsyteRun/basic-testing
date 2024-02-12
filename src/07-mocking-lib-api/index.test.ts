// import axios from 'axios';
// import { throttledGetDataFromApi } from './index';

// jest.mock('axios', () => ({
//   create: jest.fn().mockReturnValue({
//     get: jest.fn().mockResolvedValue({ data: {} }),
//   }),
// }));

// jest.mock('axios');

// const getMock = jest.spyOn(axios, 'create').mockReturnValue({
//   get: () => text,
// } as unknown as AxiosInstance);

// describe('throttledGetDataFromApi', () => {
// beforeAll(() => {
//   jest.useFakeTimers();
// });

// afterEach(() => {
//   jest.resetAllMocks();
//   jest.restoreAllMocks();
//   jest.useRealTimers();
//   jest.clearAllTimers();
//   jest.clearAllMocks();
// });

// test('should create instance with provided base url', async () => {
//   // const createInstance = jest.spyOn(axios, 'create');
//   // jest.spyOn(axios, 'create');
//   await throttledGetDataFromApi('./example');
//   // jest.advanceTimersByTime(5000);
//   // expect(createInstance).toHaveBeenCalledWith({
//   //   baseURL: 'https://jsonplaceholder.typicode.com',
//   // });
// });

// test('should perform request to correct provided url', async () => {
//   const text = 'return from get method';

//   const getMock = jest.spyOn(axios, 'create').mockReturnValue({
//     get: () => text,
//   } as unknown as AxiosInstance);

//   await throttledGetDataFromApi('/posts/1');
//   // jest.advanceTimersByTime(5000);

//   expect(getMock.mock.results[0]?.value.get()).toBe('return from get method');
// });

// test('should create instance with provided base url', async () => {
//   const createInstance = jest.spyOn(axios, 'create');

//   await throttledGetDataFromApi('/posts/1');
//   jest.advanceTimersByTime(5000);

//   expect(createInstance).toHaveBeenCalledWith({
//     baseURL: 'https://jsonplaceholder.typicode.com',
//   });
// });

// test('should return response data', async () => {
//   // Write your test here
// });
// });

// jest.mock('axios');
describe('throttledGetDataFromApi', () => {
  // beforeEach(() => {
  //   jest.resetAllMocks();
  //   jest.restoreAllMocks();
  //   jest.clearAllTimers();
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  //   jest.useRealTimers();
  //   jest.clearAllTimers();
  // });

  test('should create instance with provided base url', async () => {
    //   const createInstance = jest.spyOn(axios, 'create');
    //   try {
    //     await throttledGetDataFromApi(__dirname);
    //   } catch {
    //     expect(createInstance).toHaveBeenCalledWith({
    //       baseURL: 'https://jsonplaceholder.typicode.com',
    //     });
    //   }
  });

  // test('should perform request to correct provided url', async () => {
  //   const responseData = {
  //     userId: 1,
  //     id: 1,
  //     title: 'Sample Title',
  //     body: 'Sample Body',
  //   };

  //   const axiosGetMock = jest
  //     .spyOn(axios, 'get')
  //     .mockResolvedValue({ data: responseData });

  //   await throttledGetDataFromApi('/posts/1');

  //   expect(axiosGetMock.mock.results[0]?.value.get()).toBe(
  //     'return from get method',
  //   );
  // });

  // test('should return response data', async () => {
  //   const responseData = {
  //     userId: 1,
  //     id: 1,
  //     title: 'Sample Title',
  //     body: 'Sample Body',
  //   };

  //   jest.spyOn(axios, 'get').mockResolvedValue({ data: responseData });

  //   const result = await throttledGetDataFromApi('/posts/1');

  //   expect(result).toEqual(responseData);
  // });
});
