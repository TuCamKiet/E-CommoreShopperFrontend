import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter w-2/3 h-[40vh] flex flex-col items-center justify-center m-auto pr-32 mb-36 bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] gap-7">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
