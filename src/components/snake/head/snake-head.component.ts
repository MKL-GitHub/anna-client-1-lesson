import { bem } from "@utils";
import "./snake-head.component.scss";

const SnakeHead = () => {
  const cn = bem("SnakeHead");

  const head = document.createElement("div");

  const eyesContainer = document.createElement("div");
  const leftEye = document.createElement("div");
  // const rightEye = document.createElement("div");

  const mouth = document.createElement("div");

  head.className = cn();

  eyesContainer.className = cn("eyes-container");
  leftEye.className = cn("eye");
  // rightEye.className = cn("eye");

  mouth.className = cn("mouth");

  head.append(eyesContainer, mouth);
  eyesContainer.append(leftEye);

  return head;
};

export default SnakeHead;
