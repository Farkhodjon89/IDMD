import { classNames } from "@/shared/lib/classNames/classNames";
import {
  Home,
  UserRound,
  CircleCheck,
  BriefcaseBusiness,
  Clock3,
  NotepadText,
  FileText,
  CircleHelp,
  CircleAlert,
  LogOut,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const navbarData = [
  {
    id: 0,
    link: "/",
    Icon: Home,
    text: "Главная",
  },
  {
    id: 1,
    link: "/personal-data",
    Icon: UserRound,
    text: "Персональные данные",
  },
  {
    id: 2,
    link: "/authentification",
    Icon: CircleCheck,
    text: "Подлинность",
  },
  {
    id: 3,
    link: "/legal-entity",
    Icon: BriefcaseBusiness,
    text: "Юридическое лицо",
  },
  {
    id: 4,
    link: "/history",
    Icon: Clock3,
    text: "История",
  },
  {
    id: 5,
    link: "/sessions",
    Icon: NotepadText,
    text: "Сеансы",
  },
  {
    id: 6,
    link: "/user-agreement",
    Icon: FileText,
    text: "Пользовательское соглашение",
  },
  {
    id: 7,
    link: "/help",
    Icon: CircleHelp,
    text: "Помощь",
  },
  {
    id: 8,
    link: "/about",
    Icon: CircleAlert,
    text: "О проекте",
  },
  // {
  //   id: 9,
  //   link: "#",
  //   Icon: LogOut,
  //   text: "Exit",
  // },
];

interface NavbarProps {
  className?: string;
  locale: string;
  collapsed?: boolean;
}

export const Navbar = ({ className = "", locale, collapsed }: NavbarProps) => {
  const t = useTranslations("SideBar");

  return (
    <nav
      className={classNames("flex flex-col items-start gap-2 w-full mb-1", {}, [
        className,
      ])}
    >
      {navbarData.map(({ id, link, Icon, text }) => (
        <Link
          key={id}
          href={`/${locale}${link}`}
          className="flex items-center gap-2 text-md w-full h-9 p-1 hover:bg-gray-400 rounded-sm transition ease-in-out  duration-400 delay-0"
        >
          <span>{<Icon size={19} />}</span>
          <span className={collapsed ? "opacity-0 w-0" : ""}>{t(text)}</span>
        </Link>
      ))}
    </nav>
  );
};
