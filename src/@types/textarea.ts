import { TextareaHTMLAttributes } from "react";

export interface iTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  cols?: number;
  rows?: number;
  placeholder: string;
}
