import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import shopping_bag from "../Assets/shopping_bag.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  //group className
  const nav_menu_li =
    "flex flex-col items-center justify-center sm:gap-y-[1vh] gap-y-[2px] cursor-pointer";
  const nav_menu_hr = "border-none w-[80%] h-[2px] rounded-xl bg-[#FF4141]";

  return (
    <div className="navbar sticky top-0 z-50 bg-[#fde1ff] flex justify-between p-[max(2px,1vh)] shadow-[0_1px_3px_-2px_black] min-w-fit">
      <div className="nav-logo flex items-center gap-x-px cursor-pointer">
        <img
          src={shopping_bag}
          className="h-[clamp(32px,10vmin,100px)] object-contain p-0"
          alt="logo"
        />
        <span className="text-[#171717] text-[clamp(16px,4.3vw,38px)] max-sm:hidden font-semibold">
          SHOPPER
        </span>
      </div>
      <ul className=" nav-menu flex items-center list-none gap-x-[2vw] text-[#626262] text-[clamp(12px,4vw,30px)] font-medium">
        <li
          className={nav_menu_li}
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr className={nav_menu_hr} /> : ""}
        </li>
        <li
          className={nav_menu_li}
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "men" ? <hr className={nav_menu_hr} /> : ""}
        </li>
        <li
          className={nav_menu_li}
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr className={nav_menu_hr} /> : ""}
        </li>
        <li
          className={nav_menu_li}
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr className={nav_menu_hr} /> : ""}
        </li>
      </ul>
      <div className=" nav-login-cart flex items-center md:gap-x-[2vw] gap-x-[2px]">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button
            className="px-[2vw] sm:py-[2vh] py-[3px] outline-none border-[1px] border-[#7a7a7a] rounded-[1vmax] text-[#515151] text-[clamp(12px,4vw,30px)] font-medium cursor-pointer bg-white
        active:bg-[#f3f3f3]"
          >
            Login
          </button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <div className="relative flex cursor-pointer">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="text-[clamp(12px,4vw,32px)]"
            />
            <span className="nav-cart-count absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-red-500 text-white font-medium rounded-full px-[10%] text-[clamp(9px,2vw,20px)]">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
