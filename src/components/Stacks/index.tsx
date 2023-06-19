import React, { ReactElement } from "react";
import { data } from "./data";

export function Stacks(): ReactElement {
  return (
    <div className="p-10 flex gap-5">
      {data.map((items, index) => (
        <div
          key={index}
          className="text-white flex flex-col justify-center gap-5 w-1/4 text-2xl p-10 rounded min-w-max"
        >
          <h2 className="text-center">{items.stack}</h2>
          <div className="flex justify-center text-5xl">{items.icon}</div>
        </div>
      ))}
    </div>
  );
}
