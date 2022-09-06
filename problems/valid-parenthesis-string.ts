/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s: string) {
  let stack = [];
  let starCount = 0;
  const str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (starCount) {
        starCount--;
      } else {
        return false;
      }
    } else if (str[i] === "*") {
      starCount++;
    }
  }
  if (starCount >= stack.length) {
    return true;
  }
  return false;
};

console.log(checkValidString("((*)"));
