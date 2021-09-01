const Matrix = require('../color-bucket/color-bucket');

const input = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.'],
];
describe('the function', () => {
  test('correctly logs the matrix after mutations', () => {
    const matrix = new Matrix(input);
    const actualMatrix = matrix.log();
    expect(actualMatrix).toEqual(input);
  });
  test('correctly sets a value', () => {
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
  test('correctly replaces the colors', () => {
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
  test('correctly replaces the colors #2', () => {
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
  test('correctly throws an error if matrix has no line', () => {
    expect(() => {
      const matrix = new Matrix([]);
      console.log(matrix.length);
    }).toThrow('Matrix must have at least one line');
  });
  test('correctly throws an error if matrix has inconsistent number of columns', () => {
    expect(() => {
      new Matrix([...input, ['.', '.']]);
    }).toThrow('Matrix must have a consistent number of columns');
  });
  test('correctly throws an error if an invalid position tries to be accessed', () => {
    expect(() => {
      const matrix = new Matrix(input);
      console.log(matrix.get(0, -1));
    }).toThrow('Invalid position');
  });
  test('correctly throws an error if an invalid position tries to be set', () => {
    expect(() => {
      const matrix = new Matrix(input);
      matrix.set(0, -1, 'a');
    }).toThrow('Invalid position');
  });
});
