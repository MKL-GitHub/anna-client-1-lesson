import Grid from "./grid/grid.component";
import SnakeHead from "./head/snake-head.component";
import "./snake.component.scss";
import { bem, getRandom } from "@utils";

const OFFSET = 3;

const Snake = () => {
  const cn = bem("Snake");

  const snake = document.createElement("div");
  const grid = Grid();
  const head = SnakeHead();
  const tail = document.createElement("div");
  const food = document.createElement("div");

  food.textContent = "🍖";

  const location: { top: number; left: number; element: HTMLDivElement }[] = [
    { top: 53, left: 3, element: head },
    { top: 3, left: 3, element: tail },
  ];
  const foodLocation: { top: number; left: number } = { left: 253, top: 253 };

  food.style.left = foodLocation.left + "px";
  food.style.top = foodLocation.top + "px";

  snake.className = cn();
  tail.className = cn("tail");
  food.className = cn("food");

  snake.append(grid, head, tail, food);

  window.addEventListener("keydown", (event) => {
    const sideEnd = 450 + OFFSET;

    const lastItemLocation = { ...location[location.length - 1] };

    const update = () => {
      for (let i = location.length - 1; i >= 1; i--) {
        const item = location[i];

        const prev = location[i - 1];

        item.element.style.top = prev.top + "px";
        item.element.style.left = prev.left + "px";

        location[i] = {
          element: location[i].element,
          left: prev.left,
          top: prev.top,
        };
      }
    };

    switch (event.key) {
      case "ArrowUp": {
        update();

        const newValue =
          location[0].top === OFFSET ? sideEnd : location[0].top - 50;
        head.style.top = newValue + "px";
        head.style.rotate = "-180deg";

        location[0].top = newValue;

        break;
      }

      case "ArrowRight": {
        update();

        const newValue =
          location[0].left === sideEnd ? OFFSET : location[0].left + 50;
        head.style.left = newValue + "px";
        head.style.rotate = "-90deg";

        location[0].left = newValue;

        break;
      }

      case "ArrowDown": {
        update();

        const newValue =
          location[0].top === sideEnd ? OFFSET : location[0].top + 50;
        head.style.top = newValue + "px";
        head.style.rotate = "0deg";

        location[0].top = newValue;

        break;
      }

      case "ArrowLeft": {
        update();

        const newValue =
          location[0].left === OFFSET ? sideEnd : location[0].left - 50;
        head.style.left = newValue + "px";
        head.style.rotate = "90deg";

        location[0].left = newValue;

        break;
      }
    }

    if (
      location[0].left === foodLocation.left &&
      location[0].top === foodLocation.top
    ) {
      const randomLeft = getRandom(0, 9, true);
      const randomTop = getRandom(0, 9, true);

      foodLocation.left = 50 * randomLeft + 3;
      foodLocation.top = 50 * randomTop + 3;

      food.style.left = foodLocation.left + "px";
      food.style.top = foodLocation.top + "px";

      const bodyItem = document.createElement("div");
      bodyItem.className = cn("body");
      const lastIndex = location.length - 1;

      const tail = location[lastIndex];
      location[lastIndex] = {
        element: bodyItem,
        left: tail.left,
        top: tail.top,
      };

      bodyItem.style.left = lastItemLocation.left + "px";
      bodyItem.style.top = lastItemLocation.top + "px";

      location.push(tail);

      snake.append(bodyItem);
    }
    console.log("head location", location);
    // console.log("food", foodLocation);
  });

  return snake;
};

export default Snake;
