"use client";
import { useTheme } from "next-themes";
import { Glasses } from "lucide-react";
import { StyledButton } from "../StyledButton/StyledButton";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = "" }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <StyledButton
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="ml-6 my-2 flex items-center gap-1 w-full"
    >
      <span suppressHydrationWarning>
        <Glasses size={20} />
      </span>
      {theme === "dark" ? (
        <span suppressHydrationWarning>Обычная версия</span>
      ) : (
        <span suppressHydrationWarning>Версия для слабовидящих</span>
      )}
    </StyledButton>
  );
};
