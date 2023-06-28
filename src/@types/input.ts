import { InputHTMLAttributes } from "react";

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}
