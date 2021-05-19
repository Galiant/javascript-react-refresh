// FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // First Solution
  //   return arrays.reduce((a, b) => a.concat(b));
  /////////////////////
  // Second Solution
  //   return [].concat.apply([], arrays);
  /////////////////////
  // Third Solution
  return [].concat(...arrays);
}

console.log('FLATTEN_ARRAY', flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
