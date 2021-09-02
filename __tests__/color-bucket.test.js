const Matrix = require('../src/color-bucket/');

const input = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.'],
];
describe('the function', () => {
  test('logs the matrix after mutations', () => {
    const matrix = new Matrix(input);
    const actualMatrix = matrix.log();
    expect(actualMatrix).toEqual(input);
  });
  test('sets a value', () => {
    const expectedMatrix = [
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', 'o', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '.', '.'],
    ];
    const matrix = new Matrix(input);
    matrix.set([1, 2], 'o');
    const actualMatrix = matrix.log();
    expect(actualMatrix).toEqual(expectedMatrix);
  });
  test('replaces the colors', () => {
    const expectedMatrix = [
      ['.', 'o', 'o', 'o', '.', '.'],
      ['.', 'o', '.', '.', '#', '.'],
      ['.', 'o', 'o', 'o', '.', '.'],
      ['.', 'o', '.', '.', '.', '.'],
    ];
    const matrix = new Matrix(input);
    matrix.paint([0, 1], 'o');
    const actualMatrix = matrix.log();
    expect(actualMatrix).toEqual(expectedMatrix);
  });
  test('replaces the colors #2', () => {
    const expectedMatrix = [
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', 'o', 'o', '#', '.'],
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '.', '.'],
    ];
    const matrix = new Matrix(input);
    matrix.paint([1, 2], 'o');
    const actualMatrix = matrix.log();
    expect(actualMatrix).toEqual(expectedMatrix);
  });
  test('throws an error if matrix has no line', () => {
    expect(() => {
      const matrix = new Matrix([]);
      console.log(matrix.length);
    }).toThrow('Matrix must have at least one line');
  });
  test('throws an error if matrix has inconsistent number of columns', () => {
    expect(() => {
      new Matrix([...input, ['.', '.']]);
    }).toThrow('Matrix must have a consistent number of columns');
  });
  test('throws an error if an invalid position tries to be accessed', () => {
    expect(() => {
      const matrix = new Matrix(input);
      matrix.get(0, -1);
    }).toThrow();
  });
  test('throws an error if an invalid position tries to be set', () => {
    expect(() => {
      const matrix = new Matrix(input);
      matrix.set(0, -1, 'a');
    }).toThrow();
  });
});
