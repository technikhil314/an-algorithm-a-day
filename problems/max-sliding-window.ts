import { getArrayOfRandomNumbers } from "../utils";

var maxSlidingWindow = function (nums: number[], k: number) {
  const n = nums.length;
  let window = nums.slice(0, k);
  let output = [Math.max(...window)];
  for (let i = k; i < n; i++) {
    const removed = window.shift();
    window.push(nums[i]);
    const currentMax = output[output.length - 1];
    if (removed !== currentMax) {
      if (nums[i] <= currentMax) {
        output.push(currentMax);
      } else if (nums[i] > currentMax) {
        output.push(nums[i]);
      }
    } else {
      output.push(Math.max(...window));
    }
  }
  return output;
};
const arr = getArrayOfRandomNumbers({ size: 100000 });
console.log(arr);
console.log(maxSlidingWindow(arr, 50000));
