// ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex.addAll(2,5,6,7) === 20

// First Solution - ES5 arguments & for loop
// function addAll() {
//   const args = Array.prototype.slice.call(arguments);
//   let total = 0;
//   for (i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }
/////////////////////////////
// Second Solution - ...rest & forEach
// function addAll(...numbers) {
//   let total = 0;
//   numbers.forEach(num => (total += num));
//   return total;
// }
// Third Solution - reduce
function addAll(...numbers) {
  return numbers.reduce((total, current) => total + current);
}

console.log('ADD_ALL', addAll(2, 5, 6, 7));
