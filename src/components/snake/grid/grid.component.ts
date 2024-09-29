import "./grid.component.scss";
import { bem } from "@utils";

const Grid = () => {
  const cn = bem("SnakeGrid");

  const grid = document.createElement("div");

  Array<any>(100)
    .fill(null)
    .forEach(() => {
      const item = document.createElement("div");
      item.className = cn("item");
      grid.append(item);
    });

  grid.className = cn();

  return grid;
};

export default Grid;
