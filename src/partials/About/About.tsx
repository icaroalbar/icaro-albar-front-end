import { ReactElement } from "react";
import { Button } from "../../components/Button";
import Image from "next/image";
import Link from "next/link";
import { iconIdentification } from "@/components/Icons";
import { data } from "./data";

export function About(): ReactElement {
  return (
    <section className="grid grid-cols-2 gap-x-5 px-20 h-screen bg-body-secondary items-center">
      <div className="col-span-1 flex flex-col mx-auto gap-5">
        <div className="border-6 p-2 shadow-md border-primary-10 rounded-full max-w-mxs">
          <Image
            src="/Icaro_albar.jpg"
            alt="Imagem Icaro Albar"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-center flex-col items-center gap-5">
          <h3 className="text-h4 text-slate-300 capitalize font-medium">
            icaro albar
          </h3>
          <ul className="flex gap-5">
            {data.map((item, index) => (
              <li key={index}>
                <Link
                  target="_blank"
                  href={item.href}
                  className="text-3xl text-primary-10 transition-colors hover:text-blue-800 ease-in-out"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <h6 className="text-h6 uppercase flex gap-2 items-center text-slate-300">
          <span className="text-primary-10 text-4xl">{iconIdentification}</span>
          sobre
        </h6>
        <h1 className="text-h4 text-slate-300 tracking-[0.4rem]">
          Conheça um pouco sobre mim
        </h1>
        <p className="tracking-[0.1rem] text-lg text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem molestias debitis adipisci quibusdam, possimus quis,
          ducimus, autem quas et repellendus suscipit ut quo expedita aliquid
          aperiam nulla molestiae saepe alias?
        </p>
        <p className="tracking-[0.1rem] text-lg text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem molestias debitis adipisci quibusdam, possimus quis,
          ducimus, autem quas et repellendus suscipit ut quo expedita aliquid
          aperiam nulla molestiae saepe alias?
        </p>
        <Button title="baixar curriculo" />
      </div>
    </section>
  );
}
