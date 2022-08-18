function findSumTuple(array: number[], targetSum: number) {
  let numberHash = new Map();
  return array
    .map((currentNum) => {
      const remainder = targetSum - currentNum;
      if (numberHash.has(remainder)) {
        return [currentNum, remainder];
      } else {
        numberHash.set(currentNum, true);
      }
      return null;
    })
    .filter(Boolean);
}

console.log(findSumTuple([22, 24, 36, -3, 5, -17, 14], 19));
