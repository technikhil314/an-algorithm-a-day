import { getArrayOfRandomNumbers } from "../utils";

export default function performBubbleSort() {
  const input = getArrayOfRandomNumbers({ size: 20 });
  console.log({ input });
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      if (input[j] > input[j + 1]) {
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  console.log({ output: input });
}

performBubbleSort();
