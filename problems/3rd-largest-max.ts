function find3rdLargestMax(arr: number[]): number {
  const output: number[] = new Array(3).fill(Number.MIN_SAFE_INTEGER);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > output[2]) {
      output[2] = arr[i];
    }
    if (arr[i] > output[1]) {
      output[2] = output[1];
      output[1] = arr[i];
    }
    if (arr[i] > output[0]) {
      output[1] = output[0];
      output[0] = arr[i];
    }
    console.log(output);
  }
  return output[2];
}

console.log(
  find3rdLargestMax([19, 20, 71, 67, 91, 44, 22, 31, 88, 100, 101, 92])
);
