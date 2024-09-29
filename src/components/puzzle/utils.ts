import { getRandom } from "../../utils";
import { complexity, mixComplexity } from "./constants";

export const mix = (puzzle: HTMLDivElement) => {
  const randomValue = getRandom(0, complexity * complexity - 1, true);
  const box = puzzle.children[randomValue] as HTMLDivElement | undefined;
  box?.click();
};

export const mixToEnd = (location: any[], puzzle: HTMLDivElement) => {
  for (let i = 0; i < mixComplexity * complexity; i++) mix(puzzle);

  while (location[location.length - 1] !== null) mix(puzzle);
};
