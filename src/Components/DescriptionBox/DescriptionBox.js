import React from "react";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox mx-[5%] mt-[clamp(2rem,20vmin,10rem)]">
      <div className="descriptionbox-navigator flex">
        <div className="descriptionbox-nav-box flex items-center justify-center text-[clamp(0.4rem,4vmin,1.5rem)] font-semibold py-[clamp(0.4rem,4vmin,1.25rem)] px-[clamp(1rem,6vmin,2.5rem)] border-[0.07rem] border-[#d0d0d0] cursor-pointer">
          Description
        </div>
        <div className="descriptionbox-nav-box fade flex items-center justify-center text-[clamp(0.4rem,4vmin,1.5rem)] font-semibold py-[clamp(0.4rem,4vmin,1.25rem)] px-[clamp(1rem,6vmin,2.5rem)] border-[0.07rem] border-[#d0d0d0] cursor-pointer bg-[#FBFBFB] text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description flex flex-col text-[clamp(0.4rem,4vmin,1.25rem)] gap-[clamp(0.4rem,4vmin,1.5rem)] border-[0.07rem] border-[#D0D0D0] p-[clamp(0.7rem,7vmin,3rem)] pb-[clamp(1rem,8.5vmin,4rem)]">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services with
          detailed descriptions, images, prices, and any available variants
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export { DescriptionBox };
