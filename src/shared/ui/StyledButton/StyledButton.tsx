import { type ButtonHTMLAttributes } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const StyledButton = (props: ButtonProps) => {
  const { className = "", theme = "", children, ...otherProps } = props;

  return (
    <button
      type="button"
      className={classNames("cursor-pointer", {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
