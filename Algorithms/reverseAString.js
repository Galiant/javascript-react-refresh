// REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  ///////////
  // First solution
  // return str.split('').reverse().join('');
  ///////////
  // Second solution
  //   let revString = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revString = revString + str[i];
  //   }
  //   return revString;
  //////////
  // Third solution
  //   let revString = '';
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     revString = revString + str[i];
  //   }
  //   return revString;
  ////////////
  // Fourth solution
  //   let revString = '';
  //   for (let char of str) {
  //     revString = revString + char;
  //   }
  //   return revString;
  ///////////////////////
  // Fifth solution
  //   let revString = '';
  //   str.split('').forEach(char => (revString = char + revString));
  //   return revString;
  ////////////////
  // Sixth solution
  return str.split('').reduce((revString, char) => char + revString, '');
}

console.log('REVERSE_STRING', reverseString('hello'));
