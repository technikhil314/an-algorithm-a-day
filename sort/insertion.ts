import { getArrayOfRandomNumbers } from "../utils";

export default function performInsersionSort() {
  const input = getArrayOfRandomNumbers({ size: 20 });
  console.log(input);
  for (let i = 1; i < input.length; i++) {
    const key = input[i];
    let j = i - 1;
    while (key < input[j] && j >= 0) {
      input[j + 1] = input[j];
      j--;
    }
    input[j + 1] = key;
  }
  console.log(input);
}

performInsersionSort();
