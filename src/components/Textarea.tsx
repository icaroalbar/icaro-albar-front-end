import { ReactElement } from "react";
import { TextareaProps } from "./interfaces";

export function Textarea({placeholder, cols = 30, rows = 7, ...props}: TextareaProps): ReactElement {
    return <textarea {...props} placeholder={placeholder} cols={cols} rows={rows} className="px-2 py-1 border-2 border-primary-10 rounded outline-none focus:border-2 focus:border-yellow-700"></textarea>
}