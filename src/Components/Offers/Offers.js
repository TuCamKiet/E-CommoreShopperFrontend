import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  const offers_left_h1 =
    "text-[#171717] text-[clamp(1rem,10vmin,4.5rem)] font-semibold leading-none";
  return (
    <div className="offers w-full h-fit flex items-center justify-end relative border-2 border-black">
      <div className="offers-left flex items-center w-full h-[75%] min-h-fit absolute bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] border-2 border-red-500">
        <div className="w-2/3 flex flex-col items-center text-center z-[2] ">
          <h1 className={offers_left_h1}>Exclusive</h1>
          <h1 className={offers_left_h1}>Offers For You</h1>
          <p className="text-[#171717] text-[clamp(0.4rem,4vmin,1.25rem)] font-semibold pt-[1.5vmin]">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          <button className="w-[clamp(0.5rem,50vmin,16rem)] h-[clamp(1rem,10vmin,4rem)] rounded-full bg-[#ff4141] text-white text-[clamp(0.4rem,4vmin,1.25rem)] font-medium mt-[clamp(0.5rem,5vmin,1.5rem)] cursor-pointer">
            Check Now
          </button>
        </div>
      </div>
      <div className="offers-right flex w-1/3 items-center justify-center border-2 border-yellow-500">
        <img
          src={exclusive_image}
          alt={exclusive_image}
          className="object-contain z-[1]"
        />
      </div>
    </div>
  );
};

export { Offers };
