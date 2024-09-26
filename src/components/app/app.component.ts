import "./app.component.scss";
import Select from "../select/select.component";
import mockCities from "./mock-cities";
import Cities from "../cities/cities.component";

const App = () => {
  const app = document.getElementById("app");

  if (!app) {
    throw new Error("There is no any element with '#app' id!");
  }

  const main = document.createElement("main");

  const cities = Cities();

  main.append(cities);
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
