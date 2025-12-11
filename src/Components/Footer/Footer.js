import React from "react";
import shopping_bag from "../Assets/shopping_bag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ZaloSvg } from "../Assets/ZaloSvg";

const Footer = () => {
  const footer_links_li = "cursor-pointer";
  const footer_icons_container =
    "flex p-[1vmin] bg-[#fbfbfb] border-2 border-[#ebebeb] cursor-pointer";

  return (
    <div className="footer flex flex-col w-full justify-center items-center mt-[clamp(2rem,20vmin,10rem)] gap-[clamp(0.7rem,7vmin,3rem)]">
      <div className="footer-logo flex items-center gap-[clamp(0.415rem,4.15vmin,1.25rem)]">
        <img
          src={shopping_bag}
          alt="logo"
          className="h-[clamp(2rem,10vmin,6.25rem)] object-contain"
        />
        <p className="text-[#383838] text-[clamp(2rem,10vmin,3rem)] font-bold">
          SHOPPER
        </p>
      </div>
      <ul className="footer-links flex flex-wrap justify-center items-center list-none gap-[clamp(1rem,7vmin,3rem)] px-[1.5vmin] text-[#252525] text-[clamp(0.4rem,4vmin,1.5rem)]">
        <li className={footer_links_li}>Company</li>
        <li className={footer_links_li}>Products</li>
        <li className={footer_links_li}>Offices</li>
        <li className={footer_links_li}>About</li>
        <li className={footer_links_li}>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-[clamp(0.415rem,4.15vmin,1.25rem)]">
        <div className={footer_icons_container}>
          <FontAwesomeIcon
            icon="fa-brands fa-square-instagram"
            className="size-[clamp(1rem,6vmin,2.5rem)]"
          />
        </div>
        <div className={footer_icons_container}>
          <FontAwesomeIcon
            icon="fa-brands fa-square-facebook"
            className="size-[clamp(1rem,6vmin,2.5rem)]"
          />
        </div>
        <div className={footer_icons_container}>
          <ZaloSvg className="size-[clamp(1rem,6vmin,2.5rem)]" />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-[clamp(0.5rem,5vmin,1.75rem)] w-full mb-[clamp(0.5rem,5vmin,1.75rem)] text-[#1a1a1a] text-[clamp(0.4rem,4vmin,1.5rem)]">
        <hr className=" w-4/5 border-none rounded-full h-1 bg-[#c7c7c7]" />
        <p>Copyright © {new Date().getFullYear()} - All Right Reserved.</p>
      </div>
    </div>
  );
};

export { Footer };
