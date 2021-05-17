// VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === true,
// isPalindrome('hello') === false

function isPalindrome(str) {
  // reverse a string
  const reverseString = str
    .split('')
    .reduce((char, revString) => revString + char, '');

  // check if reversed string is equal to initial string
  return reverseString === str;
}

console.log('IS_PALINDROME', isPalindrome('racecar'));
console.log('IS_PALINDROME', isPalindrome('hello'));
