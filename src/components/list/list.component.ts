import "./list.component.scss";
import { bem } from "@utils";

const List = () => {
  const cn = bem("List");

  const list = document.createElement("div");

  list.textContent = "List";
  list.className = cn();

  return list;
};

export default List;
