import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Popular } from "../Components/Popular/Popular";
import { Offers } from "../Components/Offers/Offers";
import { NewCollections } from "../Components/NewCollections/NewCollections";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div className="w-full flex flex-col gap-[clamp(1rem,8vmin,4rem)] items-center">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export { Shop };
