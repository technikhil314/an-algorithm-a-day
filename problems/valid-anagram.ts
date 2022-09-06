/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }
  let map: any = {};
  let output = true;
  const originalWord = s.split("");
  for (let i = 0; i < originalWord.length; i++) {
    if (!map[originalWord[i]]) {
      map[originalWord[i]] = 0;
    }
    map[originalWord[i]]++;
  }
  const anagram = t.split("");
  for (let i = 0; i < anagram.length; i++) {
    if (!map[anagram[i]]) {
      output = false;
      break;
    }
    map[anagram[i]]--;
    if (map[anagram[i]] === 0) {
      delete map[anagram[i]];
    }
  }
  if (Object.keys(map).length === 0) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

const output = isAnagram("anagram", "nagaram");
console.log(output);
