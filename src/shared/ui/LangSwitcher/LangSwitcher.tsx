import { usePathname, useRouter } from "next/navigation";

interface Language {
  language: string;
  langCode: string;
}

interface LangSwitcherProps {
  className?: string;
  languages: Language[];
  locale: string;
}

export const LangSwitcher = ({
  className = "",
  languages,
  locale,
}: LangSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}`;
    if (pathname) {
      router.push(pathname.replace(locale, newLocale), { locale: newLocale });
    }
    router.refresh();
  };

  return (
    <div className="flex flex-row gap-2 ml-6">
      {languages.map(({ language, langCode }) => (
        <li
          onClick={() => handleLocaleChange(langCode)}
          className="first:list-none cursor-pointer"
          key={langCode}
        >
          {language}
        </li>
      ))}
    </div>
  );
};
