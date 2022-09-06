/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
// This map is required to memoise the results of repeatedly happening calculations
const map: any = new Map();
function climbFromStepToN(from: number, n: number): number {
  if (from > n) {
    return 0;
  }
  if (from === n) {
    return 1;
  }

  let singleStep, doubleStep;
  if (map.has(`from${from + 1}to${n}`)) {
    singleStep = map.get(`from${from + 1}to${n}`);
  } else {
    singleStep = climbFromStepToN(from + 1, n);
    map.set(`from${from + 1}to${n}`, singleStep);
  }

  if (map.has(`from${from + 2}to${n}`)) {
    doubleStep = map.get(`from${from + 2}to${n}`);
  } else {
    doubleStep = climbFromStepToN(from + 2, n);
    map.set(`from${from + 2}to${n}`, doubleStep);
  }

  return singleStep + doubleStep;
}
var climbStairs = function (n: number): number {
  return climbFromStepToN(0, n);
};
console.log(climbStairs(102));
