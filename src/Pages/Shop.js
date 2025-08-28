import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Popular } from "../Components/Popular/Popular";
import { Offers } from "../Components/Offers/Offers";

const Shop = () => {
  return (
    <div className="w-full flex flex-col gap-[clamp(0.4rem,4vmin,2rem)]">
      <Hero />
      <Popular />
      <Offers />
    </div>
  );
};

export { Shop };
