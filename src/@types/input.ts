import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
}
