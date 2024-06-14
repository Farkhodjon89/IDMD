"use client";
import Image from "next/image";
import logo from "@/shared/assets/img/logo.svg";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "@/shared/ui/LangSwitcher/LangSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { LogOut, ArrowLeftToLine } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { StyledButton } from "@/shared/ui/StyledButton/StyledButton";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className = "" }: SideBarProps) => {
  const t = useTranslations("SideBar");
  const locale = useLocale();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside className="flex flex-col relative" id="sidebar">
      <div
        className={classNames(
          "flex flex-col items-center w-[340px] min-h-screen bg-[#3B565D] text-white p-4",
          { ["collapsed"]: collapsed },
          [className]
        )}
      >
        <div className="flex-auto">
          <StyledButton
            className="absolute z-100 top-[25px] right-[20px]"
            onClick={onToggle}
          >
            <ArrowLeftToLine />
          </StyledButton>
          <ThemeSwitcher />
          <LangSwitcher
            languages={[
              { language: "Ўзб", langCode: "uz" },
              { language: "O'zb", langCode: "oz" },
              { language: "Рус", langCode: "ru" },
              { language: "Eng", langCode: "en" },
            ]}
            locale={locale}
          />
          <div className="my-8 opacity-75 hover:opacity-100 hover:duration-300 transition ease-in-out delay-300">
            <Image src={logo} width={250} height={250} alt="Логотип" priority />
          </div>
          <Navbar collapsed={collapsed} locale={locale} />
          <div className="w-11/12 border border-gray-400"></div>
          <Link
            href="#"
            className="flex items-center gap-2 text-md w-full h-9 p-1 hover:bg-gray-400 rounded-sm transition ease-in-out  duration-400 delay-0"
          >
            <span>{<LogOut size={20} />}</span>
            {t("Выход")}
          </Link>
          <div className="w-11/12 p-2 rounded-sm border border-gray-400 flex flex-col gap-2 my-8">
            <span className="text-gray-400 text-xs">
              При возникновении вопросов &darr;
            </span>
            <span className="flex items-center gap-2 text-sm">
              <i className="material-icons">phone</i>
              <span>1009</span>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <i className="material-icons">mail_outline</i>
              <span>war3supporter@gmail.uz</span>
            </span>
          </div>
        </div>
        <div className="text-md font-extrabold tracking-wide">
          <p>Uzinfocom</p>
        </div>
      </div>
    </aside>
  );
};
