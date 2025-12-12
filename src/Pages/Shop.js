import React from "react";
import { Hero } from "../Components/Hero";
import { Popular } from "../Components/Popular";
import { Offers } from "../Components/Offers";
import { NewCollections } from "../Components/NewCollections";
import { NewsLetter } from "../Components/NewsLetter";

const Shop = () => {
  return (
    <div className="w-full flex flex-col gap-[clamp(1.8rem,18vmin,10rem)] items-center">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export { Shop };
