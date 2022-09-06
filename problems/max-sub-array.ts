var maxSubArray = function (nums: number[]): number {
  let output = Number.MIN_VALUE,
    j,
    i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > output) {
      output = nums[i];
    }
    for (j = i + 1; j < nums.legnth; j++) {
      console.log(j);
    }
  }
  return output;
};

console.log(maxSubArray([1, 2, 3]));
