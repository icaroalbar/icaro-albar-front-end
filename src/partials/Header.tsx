import { ReactElement } from "react";
import { Button } from "../components/Button";

export function Header(): ReactElement {
  return (
    <section className="grid grid-cols-2 items-start gap-x-5 px-20 h-screen">
      <div className="col-span-1 py-32">
        <h6 className="text-h6 uppercase bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-primary-10">
          desenvolvedor full-stack
        </h6>
        <h1 className="text-h1 capitalize text-slate-300 tracking-[0.4rem]">
          icaro albar
        </h1>
        <p className="tracking-[0.1rem] text-lg text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem molestias debitis adipisci quibusdam, possimus quis,
          ducimus, autem quas et repellendus suscipit ut quo expedita aliquid
          aperiam nulla molestiae saepe alias?
        </p>
        <Button title="entre em contato" />
      </div>
      <div className="col-span-1 text-red-500 flex justify-center items-center blur-full">
        <div className="w-[500px] h-[500px] bg-blue-950  rounded-full"></div>
      </div>
    </section>
  );
}
