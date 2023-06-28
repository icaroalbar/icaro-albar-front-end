import { DragEvent, ReactElement } from "react";
import { iStacks } from "../@types";

const handleDragStart = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

export function StackCard({ stack, icon }: iStacks): ReactElement {
  return (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="text-white flex flex-col justify-center gap-5 text-xl"
    >
      <h2 className="text-center">{stack}</h2>
      <div className="flex justify-center text-5xl">{icon}</div>
    </div>
  );
}
