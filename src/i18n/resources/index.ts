import ru from "./ru.json";
import en from "./en.json";
import fr from "./fr.json";
import { ILanguageKey } from "@i18n/type";

export const languages = { ru, en, fr };
export const languagesArray = Object.keys(languages) as ILanguageKey[];
