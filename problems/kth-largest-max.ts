/* 
Worst Time complexity: O(n^2) 
Best case time complexity: O(1)
Worst case if k === arr.length - 1
Space Complexity: O(k)
*/
function find3rdLargestMax(arr: number[], k: number) {
  const output: number[] = new Array(k).fill(Number.MIN_SAFE_INTEGER);
  for (let i = 0; i < arr.length; i++) {
    for (let j = k - 2; j >= 0; j--) {
      if (arr[i] > output[j]) {
        output[j + 1] = output[j];
        output[j] = arr[i];
      }
    }
    // following is the logic for getting 4th largest the above one generalizes this one
    // if (arr[i] > output[2]) {
    //   output[3] = output[2];
    //   output[2] = arr[i];
    // }
    // if (arr[i] > output[1]) {
    //   output[2] = output[1];
    //   output[1] = arr[i];
    // }
    // if (arr[i] > output[0]) {
    //   output[1] = output[0];
    //   output[0] = arr[i];
    // }
  }
  return output[k - 1];
}

console.log(
  find3rdLargestMax([19, 20, 71, 67, 91, 44, 22, 31, 88, 100, 101, 1000], 4)
);
