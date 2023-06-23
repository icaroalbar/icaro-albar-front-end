import { clsx } from "clsx";
import { ReactElement } from "react";
import { iconsProcessing } from "../utils/icons";
import { ButtonProps } from "./interfaces";

export const Button = ({
  title,
  size = "md",
  disableTitle = "",
  disabled = false,
  ...props
}: ButtonProps): ReactElement => {
  const disableModel = (
    <div className="flex gap-x-2 items-center justify-center">
      {iconsProcessing}
      {disableTitle}
    </div>
  );

  return (
    <div className={`${disabled && "cursor-not-allowed"}`}>
      <button
        {...props}
        disabled={disabled}
        className={clsx(
          `uppercase font-medium select-none text-white rounded transition-colors border-2 shadow-md outline-none bg-transparent border-primary-10 hover:bg-blue-900 disabled:bg-blue-900 focus:shadow-blue-500/50 ${
            disabled && "bg-opacity-40 pointer-events-none"
          }`,
          {
            "px-6 py-2 text-sm": size == "sm",
            "px-10 py-3 text-base": size == "md",
            "px-16 py-4 text-lg": size == "lg",
            "block w-full py-2 text-lg": size == "full",
          }
        )}
      >
        {disabled ? disableModel : title}
      </button>
    </div>
  );
};
