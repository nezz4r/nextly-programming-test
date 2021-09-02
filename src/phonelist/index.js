// Raul Victor Aquino de Queiroz

function quickSearch(string, array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  if (pivot.name > string) {
    return quickSearch(string, array.slice(0, pivotIndex));
  } else if (pivot.name < string) {
    return quickSearch(string, array.slice(pivotIndex));
  } else if (pivot.name === string) {
    return pivot;
  }
}

module.exports = quickSearch;
