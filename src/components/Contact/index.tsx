import { ReactElement } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { data } from "./data";
import { Textarea } from "../Textarea";
import { items } from "../Stacks/data";

export function Contact(): ReactElement {
  return (
    <div className="bg-body-secondary text-white">
      <div className="grid grid-cols-2">
        <div className="col-span-1 p-10 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            obcaecati atque mollitia eveniet, ratione adipisci? Deserunt maiores
            error a dolore praesentium eveniet recusandae pariatur, delectus,
            facilis obcaecati, fugiat minus vel!
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            obcaecati atque mollitia eveniet, ratione adipisci? Deserunt maiores
            error a dolore praesentium eveniet recusandae pariatur, delectus,
            facilis obcaecati, fugiat minus vel!
          </p>
        </div>
        <div className="col-span-1 p-10">
          <form className="flex flex-col gap-3">
            {data.map((item, index) => (
              <Input
                key={index}
                type={item.type}
                placeholder={item.placeholder}
              />
            ))}
            <Textarea placeholder="Digite seu assunto" />
            <Button title="enviar" size="full" disableTitle="Aguarde..." />
          </form>
        </div>
      </div>
    </div>
  );
}
