import { iCard } from "@/@types/card";
import { ReactElement } from "react";

export const Card = ({ title, children, className }: iCard): ReactElement => {
  return (
    <div
      className={`${className} border-2 rounded-lg border-primary-10 p-2 mb-8`}
    >
      <div className="border rounded-lg border-blue-900 p-5">
        <h3 className="text-center text-xl capitalize">{title}</h3>
        {children}
      </div>
    </div>
  );
};
