import "./cities.component.scss";

interface City {
  value: string;
  label: string;
}

const BASE_URL = "http://localhost:8888/cities";

const Cities = () => {
  const cities = document.createElement("div");
  const citiesList = document.createElement("ul");

  cities.className = "Cities";
  citiesList.className = "Cities__list";

  const deleteCity = (value: string) => {
    citiesList.innerHTML = "";
    fetch(BASE_URL + `/${value}`, { method: "DELETE" })
      .then((res) => res.text())
      .then((res) => {
        getCities();
      });
  };

  const editCity = (value: string, label: string) => {
    console.log("label", label);
    citiesList.innerHTML = "";
    fetch(BASE_URL + `/${value}`, {
      method: "PUT",
      body: JSON.stringify({ label }),
    })
      .then((res) => res.text())
      .then((res) => {
        getCities();
      });
  };

  const createCity = (city: City) => {
    const cityEl = document.createElement("li");
    const valueContainer = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const saveButton = document.createElement("button");
    const input = document.createElement("input");

    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";
    saveButton.textContent = "Save";

    cityEl.className = "Cities__item";
    valueContainer.className = "Cities__value-container";
    buttonContainer.className = "Cities__button-container";

    valueContainer.textContent = city.label;

    buttonContainer.append(deleteButton, editButton, saveButton);
    cityEl.append(valueContainer, buttonContainer);
    citiesList.append(cityEl);

    deleteButton.onclick = () => {
      deleteCity(city.value);
    };

    editButton.onclick = () => {
      input.value = city.label;

      valueContainer.textContent = "";

      valueContainer.append(input);
    };

    saveButton.onclick = () => {
      console.log("new value", input.value);
      editCity(city.value, input.value);
    };
  };

  const getCities = () => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((res: City[]) => {
        res.forEach(createCity);
      });
  };

  getCities();

  cities.append(citiesList);

  return cities;
};

export default Cities;
