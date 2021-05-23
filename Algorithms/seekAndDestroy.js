// SEEK & DESTROY
// Remove from the array whatever is in the following arguments.
// Return the leftover values
// ex. seekAnDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// First Solution - arguments, indexOf, filter
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   const filterArr = arr => {
//     // Return true if not in array
//     return args.indexOf(arr) === -1;
//   };

//   return arr.filter(filterArr);
// }
////////////////////////////////////////
// Second Solution - ...rest, filter, includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log('SEEK_AND_DESTROY', seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
