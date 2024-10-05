import { ILanguageKey, IWorkKey } from "@i18n/type";
import "./language-imitation.component.scss";
import { bem } from "@utils";
import { languagesArray } from "@i18n/resources";
import { t } from "@i18n";
import { localizationObject } from "@i18n/t.util";
import plural from "@utils/plural";

const words: IWorkKey[] = ["cell", "column", "name", "string", "table"];

const LanguageImitation = () => {
  console.log("jj");
  const cn = bem("LanguageImitation");

  const languageImitation = document.createElement("div");
  const boxContainer = document.createElement("div");
  const anotherBox = document.createElement("div");

  const selectLabel = document.createElement("label");
  const languageSelect = document.createElement("select");

  words.forEach((word) => {
    const box = document.createElement("div");
    box.className = cn("box");
    boxContainer.append(box);
  });

  const setBoxTextContent = () => {
    Array.from(boxContainer.children).forEach((box, index) => {
      box.textContent = t(words[index]);
    });
  };

  languagesArray.forEach((language) => {
    const option = document.createElement("option");
    option.textContent = language;
    option.value = language;
    option.className = cn("select-option");
    languageSelect.append(option);
  });

  setBoxTextContent();

  selectLabel.textContent = "Language";

  const v = 5;

  anotherBox.textContent = `${v} ${t("cat", v)}`;

  languageImitation.className = cn();
  boxContainer.className = cn("box-container");
  selectLabel.className = cn("select-label");
  languageSelect.className = cn("select");
  anotherBox.className = cn("box");

  selectLabel.append(languageSelect);
  languageImitation.append(selectLabel, boxContainer, anotherBox);

  languageSelect.onchange = (e) => {
    localizationObject.currentLanguage = languageSelect.value as ILanguageKey;
    setBoxTextContent();
    anotherBox.textContent = `${v} ${t("cat", v)}`;
  };

  return languageImitation;
};

export default LanguageImitation;
