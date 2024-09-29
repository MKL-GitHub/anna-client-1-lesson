
import "./item.component.scss";
import { bem } from "@utils";

const Item = () => {
  const cn = bem('Item');

  const item = document.createElement('div');

  item.textContent = "Item";
  item.className = cn();

  return item;
}

export default Item;
