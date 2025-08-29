import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter w-2/3 h-[40vh] flex flex-col items-center justify-center m-auto pr-32 mb-36 bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] gap-7">
      <h1 className="text-[#454545] text-5x font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-xl">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[45rem] h-16 rounded-full border-2 border-[#e3e3e3]">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[30rem] ml-7 border-none outline-none text-[#616161] text-base"
        />
        <button className="w-52 h-16 rounded-full bg-black text-white text-base cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export { NewsLetter };
