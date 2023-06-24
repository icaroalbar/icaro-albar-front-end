import { ReactElement } from "react";
import { TextareaProps } from "./interfaces";

export function Textarea({
  placeholder,
  cols = 30,
  rows = 7,
  ...props
}: TextareaProps): ReactElement {
  return (
    <div className="relative">
      <textarea
        {...props}
        cols={cols}
        rows={rows}
        required
        className="w-full px-2 py-1 border-2 duration-150 ease-in-out bg-transparent border-primary-10 rounded outline-none focus:border-2 focus:border-secondary-10"
      />
      <label className="absolute left-4 text-sm text-slate-400 pointer-events-none translate-y-2 focus:translate-y-10 duration-500 ease-in-out selection:bg-zinc-500">
        {placeholder}
      </label>
    </div>
  );
}
