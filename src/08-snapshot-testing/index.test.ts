import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const data = [1];
    const expectedData = {
      value: 1,
      next: {
        value: null,
        next: null,
      },
    };

    const result = generateLinkedList(data);

    expect(result).toStrictEqual(expectedData);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const data = [2];
    const expectedData = {
      value: 2,
      next: {
        value: null,
        next: null,
      },
    };

    const result = generateLinkedList(data);

    expect(result).toMatchSnapshot(expectedData);
  });
});
