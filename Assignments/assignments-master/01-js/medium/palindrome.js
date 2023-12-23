/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();

  let rstr = cleanedStr.split('').reverse().join('');

  return cleanedStr == rstr;
}

module.exports = isPalindrome;
