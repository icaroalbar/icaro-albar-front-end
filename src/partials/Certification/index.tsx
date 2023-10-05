import { iconCertification } from "@/components/Icons";
import { ReactElement } from "react";
import Image from "next/image";

export function Certification(): ReactElement {
  return (
    <div className="py-16">
      <div className="text-center">
        <h6 className="text-h6 font-normal mb-6 text-white flex justify-center items-center gap-x-2">
          <span className="text-3xl text-primary-10">{iconCertification}</span>
          Certificações
        </h6>
        <p className="pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt
          nostrum hic ad ex quia commodi nemo repudiandae!
        </p>
      </div>
      <div className="grid grid-cols-3 justify-center items-center px-60">
        <div className="col-span-1">
          <Image
            src="/ccp.png"
            alt="Imagem Cerfificação AWS Cloud Practitioner"
            width={150}
            height={150}
          />
        </div>
        <div className="col-span-2 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            quaerat? Quo at laboriosam neque qui doloribus iste, soluta
            repellendus placeat et amet quia temporibus nobis voluptate commodi
            dolore ratione? Porro!
          </p>
        </div>
      </div>
    </div>
  );
}
