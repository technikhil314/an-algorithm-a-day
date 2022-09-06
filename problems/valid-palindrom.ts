/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
*/
/**
 * @param {string} s
 * @return {boolean}
 */

const map = new Map();

const isNonAlphaNumeric = (char) => {
  if (map.has(char)) {
    return map.get(char);
  }
  const isNonAlpha = char < "a" || "z" < char; // a(97) - z(122)
  const isNonNumeric = char < "0" || "9" < char; // 0(48) - 9(57)

  const result = isNonAlpha && isNonNumeric;
  map.set(char, result);
  return result;
};

var isPalindrome = function (s) {
  const lowerCaseStr = s.toLowerCase();
  let left = 0;
  let right = lowerCaseStr.length - 1;
  let output = true;
  while (left < right) {
    while (left < right && isNonAlphaNumeric(lowerCaseStr[left])) {
      left++;
    }
    while (left < right && isNonAlphaNumeric(lowerCaseStr[right])) {
      right--;
    }
    const leftVal = lowerCaseStr[left];
    const rightVal = lowerCaseStr[right];
    if (leftVal === rightVal) {
      left++;
      right--;
    } else {
      output = false;
      break;
    }
  }
  return output;
};
