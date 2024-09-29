
import "./people.component.scss";
import { bem } from "@utils";

const People = () => {
  const cn = bem('People');

  const people = document.createElement('div');

  people.textContent = "People";
  people.className = cn();

  return people;
}

export default People;
