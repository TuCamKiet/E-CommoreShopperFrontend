import React from "react";
import shopping_bag from "../Assets/shopping_bag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ZaloSvg } from "../Assets/ZaloSvg";

const Footer = () => {
  const footer_links_li = "cursor-pointer";
  const footer_icons_container =
    "flex p-2 bg-[#fbfbfb] border-2 border-[#ebebeb]";

  return (
    <div className="footer flex flex-col justify-center items-center gap-12">
      <div className="footer-logo flex items-center gap-5">
        <img
          src={shopping_bag}
          alt="logo"
          className="h-[clamp(2rem,10vmin,6.25rem)]  object-contain"
        />
        <p className="text-[#383838] text-5xl font-bold">SHOPPER</p>
      </div>
      <ul className="footer-links flex list-none gap-12 text-[#252525] text-xl">
        <li className={footer_links_li}>Company</li>
        <li className={footer_links_li}>Products</li>
        <li className={footer_links_li}>Offices</li>
        <li className={footer_links_li}>About</li>
        <li className={footer_links_li}>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-5">
        <div className={footer_icons_container}>
          <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
        </div>
        <div className={footer_icons_container}>
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        </div>
        <div className={footer_icons_container}>
          <ZaloSvg className="w-5 h-4" />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-7 w-full mb-7 text-[#1a1a1a] text-xl">
        <hr className=" w-4/5 border-none rounded-full h-1 bg-[#c7c7c7]" />
        <p>Copyright @ {new Date().getFullYear()} - All Right Reserved.</p>
      </div>
    </div>
  );
};

export { Footer };
