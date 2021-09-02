// Raul Victor Aquino de Queiroz

class Matrix {
  constructor(input) {
    if (input.length < 1) {
      throw new Error('Matrix must have at least one line');
    }
    this.matrix = input.map((line, lineIndex) => {
      if (line.length !== input[0].length) {
        throw new Error('Matrix must have a consistent number of columns');
      }
      return line.map((cell, cellIndex) => {
        return { value: cell, coords: [lineIndex, cellIndex] };
      });
    });
    this.rows = this.matrix.length - 1;

    this.cols = 0 || this.matrix[0]?.length - 1;
  }

  log() {
    return this.matrix.map((line) => {
      return line.map((cell) => cell.value);
    });
  }

  set(pos, value) {
    this.matrix[pos[0]][pos[1]] = { coords: pos, value: value };
    return this;
  }

  get(pos) {
    return this.matrix[pos[0]][pos[1]].value;
  }

  validatePosition(pos) {
    if (pos[0] > this.rows || pos[0] < 0) {
      return `Invalid position, row index should be between 0 and ${this.rows}`;
    }
    if (pos[1] > this.cols || pos[1] < 0) {
      return `Invalid position, column index should be between 0 and ${this.cols}`;
    }
    return true;
  }

  filterValidCrossPositions(positions, initialValue) {
    return positions.filter((position) => {
      if (this.validatePosition(position) !== true) return false;
      if (this.get(position) === initialValue) {
        return true;
      }
    });
  }

  paint(pos, value) {
    const initialValue = this.get(pos);

    this.set(pos, value);

    const top = [pos[0] - 1, pos[1]];
    const bottom = [pos[0] + 1, pos[1]];
    const left = [pos[0], pos[1] - 1];
    const right = [pos[0], pos[1] + 1];

    const crossPositions = [top, bottom, left, right];

    const validCrossPositions = this.filterValidCrossPositions(
      crossPositions,
      initialValue
    );
    if (validCrossPositions.length > 0) {
      validCrossPositions.forEach((pos) => {
        if (this.get(pos) == initialValue) {
          this.paint(pos, value);
        }
      });
    }
    return this;
  }
}

module.exports = Matrix;
