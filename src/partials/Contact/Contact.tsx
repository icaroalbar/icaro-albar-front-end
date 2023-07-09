import { ReactElement, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export function Contact(): ReactElement {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const handleSendMessage: SubmitHandler<any> = (data: any) => {
    try {
      setButtonDisabled(true);
      axios.post("./api/telegraf", data);
      toast.success("Cliente cadastrado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
      setButtonDisabled(false);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro. Tente novamente mais tarde.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="bg-body-secondary text-white">
        <div className="grid grid-cols-2">
          <div className="col-span-1 p-10 flex flex-col gap-5 items-center justify-center">
            <h1 className="text-h4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              obcaecati atque mollitia eveniet, ratione adipisci? Deserunt
              maiores error a dolore praesentium eveniet recusandae pariatur,
              delectus, facilis obcaecati, fugiat minus vel!
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              obcaecati atque mollitia eveniet, ratione adipisci? Deserunt
              maiores error a dolore praesentium eveniet recusandae pariatur,
              delectus, facilis obcaecati, fugiat minus vel!
            </p>
          </div>
          <div className="col-span-1 p-10">
            <form
              onSubmit={handleSubmit(handleSendMessage)}
              className="flex flex-col gap-3"
            >
              <Input
                name="name"
                placeholder="Digite seu nome"
                register={register}
              />
              <Input
                name="email"
                placeholder="Digite seu e-mail"
                register={register}
              />
              <Input
                name="phone"
                placeholder="Digite seu telefone"
                register={register}
              />
              <Textarea
                placeholder="Digite seu assunto"
                name="message"
                register={register}
              />
              <Button
                title="enviar"
                size="full"
                disableTitle="Aguarde..."
                disabled={buttonDisabled}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
