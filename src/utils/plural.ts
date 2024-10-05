export default function plural(
  value: number,
  variants: any = {},
  locale = "ru-RU"
) {
  const key = new Intl.PluralRules(locale).select(value);
  return variants[key] || "";
}
