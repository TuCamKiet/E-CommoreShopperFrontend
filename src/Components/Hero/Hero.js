import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero_img from "../Assets/hero_img.png";

const Hero = () => {
  const hero_left_p = "text-[#171717] text-8xl font-extrabold";
  return (
    <div className="hero bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex w-full">
      <div className="hero-left flex flex-col flex-1 justify-center gap-5 leading-none pl-[5vw]">
        <h1 className="text-[#090909] text-2xl font-semibold">
          NEW ARRIVALS ONLY
        </h1>
        <div>
          <div className="hero-hand-icon flex items-center gap-5">
            <p className={hero_left_p}>new</p>
            <FontAwesomeIcon
              icon="fa-regular fa-hand-peace"
              className="text-8xl"
            />
          </div>
          <p className={hero_left_p}>collections</p>
          <p className={hero_left_p}>for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-3.5 w-72 h-16 rounded-full mt-7 bg-[#ff4141] text-white text-2xl font-medium cursor-pointer">
          <div>Last Collection</div>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </div>
      </div>
      <div className="hero-right flex flex-1 items-center justify-center max-sm:hidden">
        <img src={hero_img} alt={hero_img} className="object-contain" />
      </div>
    </div>
  );
};

export { Hero };
