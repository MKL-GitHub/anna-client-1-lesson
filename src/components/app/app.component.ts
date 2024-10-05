import "./app.component.scss";
import Select from "../select/select.component";
import mockCities from "./mock-cities";
import Cities from "../cities/cities.component";
import Puzzle from "../puzzle/puzzle.component";
// import { $ } from "../../utils";
import Snake from "../snake/snake.component";
import { $ } from "@utils";
import { t } from "@i18n";
import { LanguageImitation } from "@components";

const App = () => {
  const app = document.getElementById("app");

  if (!app) {
    throw new Error("There is no any element with '#app' id!");
  }

  const main = document.createElement("main");

  main.append(LanguageImitation());

  // main.append(Snake());

  // const main = $(
  //   "main",
  //   {},
  //   $(
  //     "nav",
  //     { className: "nav" },
  //     $(
  //       "ul",
  //       { className: "ul" },
  //       $("li", { className: "li", textContent: "li1" }),
  //       $("li", { className: "li", textContent: "li2" }),
  //       $("li", { className: "li", textContent: "li3" }),
  //       $("li", { className: "li", textContent: "li4" })
  //     )
  //   )
  // );

  // const nav = document.createElement("nav");
  // const ul = document.createElement("ul");
  // const li1 = document.createElement("li");
  // const li2 = document.createElement("li");
  // const li3 = document.createElement("li");
  // const li4 = document.createElement("li");

  // li1.textContent = "li1";
  // li2.textContent = "li2";
  // li3.textContent = "li3";
  // li4.textContent = "li4";

  // nav.className = "nav";
  // ul.className = "ul";
  // li1.className = "li";
  // li2.className = "li";
  // li3.className = "li";
  // li4.className = "li";

  // nav.append(ul);
  // ul.append(li1, li2, li3, li4);

  // main.append(nav);

  // const puzzle = Puzzle();

  // main.append(puzzle);

  // const cities = Cities();

  // main.append(cities);
  // const form = document.createElement("form");
  // const checkFormButton = document.createElement("button");

  // checkFormButton.className = "check-form";

  // checkFormButton.textContent = "Check form";

  // checkFormButton.onclick = () => {
  //   const commonSelectValue = (form.elements as any)["common-select"].value;
  //   const multipleSelectValue = (form.elements as any)["multiple-select"].value;

  //   // console.log("form element", form.elements);
  //   console.log("common-select:", commonSelectValue);
  //   console.log("multiple-select:", multipleSelectValue);
  // };

  // main.append(form, checkFormButton);

  // const select = Select({
  //   options: mockCities,
  //   placeholder: "Common select",
  //   name: "common-select",
  // });

  // const multipleSelect = Select({
  //   options: mockCities,
  //   mode: "multiple",
  //   placeholder: "Multiple select",
  //   name: "multiple-select",
  // });

  // form.append(select, multipleSelect);

  app.append(main);

  return app;
};

export default App;
