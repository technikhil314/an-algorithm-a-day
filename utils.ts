type RandomArrayGeneratorInput = {
  size: number;
};

/**
 * @param min  Comment for parameter ´text´.
 */
function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getRandomInteger(min: number, max: number): number {
  return Math.floor(getRandomNumber(min, max));
}

export function getArrayOfRandomNumbers({ size }: RandomArrayGeneratorInput) {
  let result = new Array(size);
  return result.fill(0).map(() => getRandomInteger(-1000, 1000));
}
