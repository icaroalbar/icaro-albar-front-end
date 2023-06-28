import { ButtonHTMLAttributes } from "react";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  disableTitle?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | "full";
}
