import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter h-fit flex flex-col items-center justify-center text-center pt-[clamp(0.415rem,4.15vmin,1.25rem)] px-[clamp(1.25rem,9vmin,6rem)] gap-[clamp(0.5rem,5vmin,1.75rem)] sm:leading-normal leading-none bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)]">
      <h1 className="text-[#454545] text-[clamp(1rem,10vmin,3rem)] font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[clamp(0.5rem,5vmin,1.25rem)]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-end bg-white w-full h-[clamp(1.4rem,14vmin,4rem)] rounded-full border-2 border-[#e3e3e3]">
        <input
          type="email"
          placeholder="Your Email Here"
          className="w-[65%] border-none outline-none text-[#616161] text-[clamp(0.5rem,5vmin,1.25rem)]"
        />
        <button className="w-[31%] h-full rounded-full bg-black text-white text-[clamp(0.5rem,5vmin,1.25rem)] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export { NewsLetter };
