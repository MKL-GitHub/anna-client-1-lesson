import { languages } from "./resources";
import ru from "./resources/ru.json";

export type ILocalization = typeof ru;
export type IWorkKey = keyof ILocalization;
export type ILanguageKey = keyof typeof languages;
