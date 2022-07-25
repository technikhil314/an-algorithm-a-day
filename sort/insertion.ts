import { getArrayOfRandomNumbers } from "../utils";

export default function performInsersionSort() {
  const input = getArrayOfRandomNumbers({ size: 20 });
  for (let i = 0; i < input.length; i++) {
    const key = input[i];
    for(let j = 1; input[i + j] < key && j < input.length - 1; j++) {
        input[]
    }
  }
}
