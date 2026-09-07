import type { Locale } from "~/data/type";

export const useLocale = () => {
  const locale = useState<Locale>("locale", () => "ja");

  useHead(() => ({
    htmlAttrs: { lang: locale.value },
  }));

  const setLocale = (value: Locale) => {
    locale.value = value;
  };

  return {
    locale,
    setLocale,
  };
};
