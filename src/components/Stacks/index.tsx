import React, { ReactElement } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { items } from "./data";
import { responsive } from "./responsive";

export function Stacks(): ReactElement {
  return (
    <div className="py-16 select-none text-white text-center">
      <h6 className="text-h6 font-normal mb-6">Skills</h6>
      <p className="pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt
        nostrum hic ad ex quia commodi nemo repudiandae!
      </p>
      <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        autoPlay
        disableButtonsControls
        disableDotsControls
        animationDuration={2000}
        responsive={responsive}
      />
    </div>
  );
}
