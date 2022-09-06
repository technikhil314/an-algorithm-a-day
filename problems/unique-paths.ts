var uniquePaths = function (m: number, n: number): number {
  if (m === 0 || n === 0) {
    return 0;
  }
  if ((m === 1 && n === 2) || (m === 2 && n === 1)) {
    return 1;
  }
  return uniquePaths(m, n - 1) + uniquePaths(m - 1, n);
};

console.log(uniquePaths(3, 7));
