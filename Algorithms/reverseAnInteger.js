// REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  // Convert integer to string and reverse it
  const reverseString = int.toString().split('').reverse().join('');

  // convert string to integer - Math.sign() returning positive or negative sign where positive won't be returned
  return parseInt(reverseString) * Math.sign(int);
}

console.log('REVERSE_AN_INTEGER', reverseInt(521));
