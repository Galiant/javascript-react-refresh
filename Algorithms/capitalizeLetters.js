// CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  //  First solution
  //   const strArr = str.toLowerCase().split(' ');
  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   return strArr.join(' ');
  ////////////////////////////
  // Second solution
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
  ///////////////////////
  // Third solution
  //   return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

console.log('CAPITALIZE_LETTERS', capitalizeLetters('i love javascript'));
