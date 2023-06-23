import { ReactElement } from "react";
import { InputProps } from "./interfaces";

export function Input({type = "text", placeholder, ...props}: InputProps): ReactElement {
    return <input {...props} type="text" placeholder={placeholder} className="px-2 py-1 border-2 border-primary-10 rounded outline-none focus:border-2 focus:border-yellow-700" />
}   