import { TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface iTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  cols?: number;
  rows?: number;
  name: string;
  register: UseFormRegister<any>;
  placeholder: string;
}
