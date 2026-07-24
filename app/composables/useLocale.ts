import { Locale } from "~/data/type";

export const useLocale = () => {
  const locale = useState<Locale>("locale", () => "ja");

  const setLocale = (value: Locale) => {
    locale.value = value;
  };

  return {
    locale,
    setLocale,
  };
};
