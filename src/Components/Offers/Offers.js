import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  const offers_left_h1 = "text-[#171717] text-7xl font-semibold";
  return (
    <div className="offers w-2/3 h-[60vh] flex m-auto pr-32 mb-36 bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)]">
      <div className="offers-left flex flex-1 flex-col justify-center">
        <h1 className="offers_left_h1">Exclusive</h1>
        <h1 className="offers_left_h1">Offers For You</h1>
        <p className="text-[#171717] text-xl font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-64 h-16 rounded-3xl bg-[#ff4141] border-none text-white text-xl font-medium mt-7 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="offers-right flex flex-1 items-center justify-end pt-12">
        <img src={exclusive_image} alt={exclusive_image} />
      </div>
    </div>
  );
};

export { Offers };
