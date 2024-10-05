import plural from "@utils/plural";
import { languages } from "./resources";
import { ILanguageKey, ILocalization } from "./type";

interface ILocalizationObject {
  currentLanguage: ILanguageKey;
}

export const localizationObject: ILocalizationObject = {
  currentLanguage: "ru",
};

const t = (key: keyof ILocalization, number?: number) => {
  const word = languages[localizationObject.currentLanguage][key];

  if (number === undefined) return word;
  return plural(number, word);
};

export default t;
