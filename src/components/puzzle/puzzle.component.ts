import { bem } from "@utils";
import { boxSize, complexity, puzzleSize } from "./constants";
import "./puzzle.component.scss";
import { mixToEnd } from "./utils";

const Puzzle = () => {
  const cn = bem("Puzzle");

  const location = Array.from({ length: complexity * complexity })
    .fill(null)
    .map((v, i, arr) => (arr.length - 1 === i ? null : i));

  const locationSuccess = location.toString();

  let ready = false;
  let column = 0;
  let row = 0;

  const puzzleContainer = document.createElement("div");
  const puzzle = document.createElement("div");
  const mixButton = document.createElement("button");

  for (let i = 0; i < complexity * complexity - 1; i++) {
    const box = document.createElement("div");

    box.textContent = i + "";

    box.className = cn("box");
    box.style.height = boxSize + "px";
    box.style.width = boxSize + "px";
    box.style.left = column * boxSize + "px";
    box.style.top = row * boxSize + "px";

    column++;

    if (column === complexity) {
      column = 0;
      row++;
    }

    puzzle.append(box);

    box.onclick = () => {
      const top = parseInt(box.style.top);
      const left = parseInt(box.style.left);

      const index = location.indexOf(i);

      const setValue = (index: number, step: number) => {
        location[index + step] = i;
        location[index] = null;

        const param = Math.abs(step) === complexity ? "top" : "left";
        const paramVal = param === "left" ? left : top;
        box.style[param] = paramVal + (step > 0 ? boxSize : -boxSize) + "px";
      };

      if (location[index + complexity] === null) {
        setValue(index, complexity);
      } else if (location[index - complexity] === null) {
        setValue(index, -complexity);
      } else if (
        location[index + 1] === null &&
        left !== (complexity - 1) * boxSize
      ) {
        setValue(index, 1);
      } else if (location[index - 1] === null && left) {
        setValue(index, -1);
      }

      if (ready && location.toString() === locationSuccess) {
        puzzleContainer.classList.add(cn("container", "success"));
      }
    };
  }

  puzzleContainer.className = cn("container");
  puzzle.className = cn();
  puzzle.style.height = puzzleSize + "px";
  puzzle.style.width = puzzleSize + "px";
  mixButton.textContent = "Mix";
  mixButton.className = cn("mix-button");

  mixButton.onclick = () => {
    mixToEnd(location, puzzle);
    puzzleContainer.classList.remove(cn("container", "success"));
  };

  puzzleContainer.append(puzzle, mixButton);

  mixToEnd(location, puzzle);
  ready = true;

  return puzzleContainer;
};

export default Puzzle;
