import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero_img from "../Assets/hero_img.png";

const Hero = () => {
  const hero_left_p =
    "text-[#171717] text-[clamp(1rem,10vmin,6rem)] font-extrabold";
  return (
    <div className="hero bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex w-full">
      <div className="hero-left flex flex-col flex-1 justify-center items-center">
        <div className="max-sm:items-center max-sm:text-center flex flex-col gap-[clamp(0.415rem,4.15vmin,1.25rem)]">
          <h1 className="text-[#090909] text-[clamp(0.5rem,5vmin,1.5rem)] font-semibold">
            NEW ARRIVALS ONLY
          </h1>
          <div className="leading-none">
            <div className="hero-hand-icon flex items-center gap-[clamp(0.415rem,4.15vmin,1.25rem)] max-sm:justify-center">
              <p className={hero_left_p}>new</p>
              <FontAwesomeIcon
                icon="fa-regular fa-hand-peace"
                className={hero_left_p}
              />
            </div>
            <p className={hero_left_p}>collections</p>
            <p className={hero_left_p}>for everyone</p>
          </div>
          <div className="hero-latest-btn flex justify-center items-center gap-[clamp(0.291rem,2.91vmin,0.875rem)] w-[clamp(6rem,60vmin,18rem)] h-[clamp(1.4rem,14.3vmin,4rem)] text-[clamp(0.5rem,5vmin,1.5rem)] mt-[clamp(0.2rem,2vmin,1.75rem)] rounded-full bg-[#ff4141] text-white font-medium cursor-pointer">
            <div>Last Collection</div>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>
      <div className="hero-right flex flex-1 items-center justify-center max-sm:hidden">
        <img src={hero_img} alt={hero_img} className="object-contain" />
      </div>
    </div>
  );
};

export { Hero };
