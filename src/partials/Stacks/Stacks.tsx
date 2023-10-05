import { ReactElement } from "react";
import { data } from "./data";
import { Card } from "@/components/Card";

export function Stacks(): ReactElement {
  return (
    <div className="py-16 text-white px-28">
      <div className="select-none text-center">
        <h6 className="text-h6 font-normal mb-6">Skills</h6>
        <p className="pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt
          nostrum hic ad ex quia commodi nemo repudiandae!
        </p>
      </div>
      <div className="px-16">
        {data.map((item, index) => (
          <Card key={index} title={item.title}>
            <div className="flex justify-between py-4">
              {item.stacks.map((stack, index) => (
                <div key={index} className="flex flex-col gap-y-2 items-center">
                  <p>{stack.name}</p>
                  <p className="text-4xl">{stack.icon}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
