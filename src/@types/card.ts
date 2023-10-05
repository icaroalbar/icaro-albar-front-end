import { ReactNode } from "react";

export interface iCard {
  title: string;
  children: ReactNode;
  className?: string;
}
