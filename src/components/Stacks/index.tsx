import React, { ReactElement } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { items } from "./data";
import { responsive } from "./responsive";

export function Stacks(): ReactElement {
  return (
    <div className="p-10">
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </div>
  );
}
