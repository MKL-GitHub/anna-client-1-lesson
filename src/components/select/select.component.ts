import "./select.component.scss";

import CrossSvg from "../../assets/cross.svg";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options?: SelectOption[];
  mode?: "multiple";
  placeholder?: string;
  name?: string;
}

const Select = (props?: SelectProps) => {
  let selectedOp: HTMLDivElement | undefined;
  let input: HTMLInputElement | undefined;

  const select = document.createElement("div");
  const placeholder = document.createElement("div");
  const optionsContainer = document.createElement("div");
  const selectedOptions = document.createElement("div");

  const selectedValues: string[] = [];

  if (props?.name) {
    input = document.createElement("input");
    input.name = props.name;
    input.hidden = true;
    select.append(input);
  }

  if (props?.placeholder) {
    placeholder.textContent = props.placeholder;
  }

  props?.options?.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.textContent = option.label;

    optionElement.className = "Select__option";

    optionsContainer.append(optionElement);

    optionElement.onclick = () => {
      if (selectedOp) {
        selectedOp.classList.remove("Select__option_selected");
      }
      optionElement.classList.add("Select__option_selected");

      if (props.mode === "multiple") {
        const ops = Array.from(selectedOptions.children);
        const foundOp = ops.find((op) => op.textContent === option.label);

        if (foundOp) {
          selectedOptions.removeChild(foundOp);
          optionElement.classList.remove("Select__option_selected");
          return;
        }

        const selectedOption = document.createElement("div");
        const closeButton = document.createElement("button");
        const crossImg = new Image();

        selectedOption.textContent = option.label;
        crossImg.src = CrossSvg;

        crossImg.width = 13;

        crossImg.className = "Select__selected-option-close-img";
        closeButton.className = "Select__selected-option-close-btn";
        selectedOption.className = "Select__selected-option";

        closeButton.append(crossImg);
        selectedOption.append(closeButton);
        selectedOptions.append(selectedOption);

        selectedOption.setAttribute("data-value", option.value);

        if (input) {
          const ops = Array.from(selectedOptions.children);
          // input.value =
          const values = ops.map((op) => op.getAttribute("data-value"));
          input.value = values.join(",");
        }

        closeButton.onclick = () => {
          selectedOptions.removeChild(selectedOption);
          optionElement.classList.remove("Select__option_selected");
        };
      } else {
        selectedOp = optionElement;
        selectedOptions.textContent = option.label;
        if (input) {
          input.value = option.value;
        }
      }

      if (select.contains(placeholder)) select.removeChild(placeholder);

      select.append(selectedOptions);
    };
  });

  select.className = "input Select";
  placeholder.className = "input-placeholder";
  optionsContainer.className = "Select__options-container";
  selectedOptions.className = "Select__selected-options";

  select.append(placeholder);

  select.onclick = () => {
    // select.removeChild(placeholder)
    select.append(optionsContainer);
  };

  return select;
};

export default Select;
