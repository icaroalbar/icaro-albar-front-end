import { ReactElement } from "react";
import { Button } from "../Button";

export function Contact(): ReactElement {
  return (
    <div className="bg-body-secondary text-white">
      <div className="grid grid-cols-2">
        <div className="col-span-1 p-10 flex flex-col gap-5">
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
          <form className="flex flex-col gap-5">
            <input type="text" placeholder="Digite seu nome" />
            <input type="text" placeholder="Digite seu e-mail" />
            <input type="text" placeholder="Digite seu telefone de contato" />
            <textarea
              placeholder="Digite seu assunto"
              cols={30}
              rows={10}
            ></textarea>
            <Button title="enviar" disableTitle="Aguarde..." />
          </form>
        </div>
      </div>
    </div>
  );
}
