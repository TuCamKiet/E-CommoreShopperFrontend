import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import shopping_bag from "../Assets/shopping_bag.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  let location = useLocation();

  useEffect(() => {
    let menuState =
      location.pathname.length === 1 ? "shop" : location.pathname.split("/")[1];
    setMenu((prev) => (prev === menuState ? prev : menuState));
  }, [location]);

  //group className
  const nav_menu_li =
    "flex flex-col items-center justify-center sm:gap-y-[1vh] gap-y-[2px] cursor-pointer";
  const nav_menu_hr = "border-none w-[80%] h-[2px] rounded-xl bg-[#FF4141]";

  return (
    <div className="navbar sticky top-0 z-50 bg-[#fde1ff] flex w-full min-w-fit justify-between p-[max(2px,1vh)] shadow-[0_1px_3px_-2px_black]">
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ textDecoration: "none" }}
        to="/"
        className="nav-logo flex items-center gap-x-px cursor-pointer"
      >
        <img
          src={shopping_bag}
          className="h-[clamp(32px,10vmin,100px)] object-contain p-0"
          alt="logo"
        />
        <span className="text-[#171717] text-[clamp(16px,4.3vw,38px)] max-sm:hidden font-semibold">
          SHOPPER
        </span>
      </Link>
      <ul className=" nav-menu flex flex-1 items-center justify-center list-none gap-x-[2vw] text-[#626262] text-[clamp(12px,4vw,30px)] font-medium">
        <li className={nav_menu_li}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Shop
          </Link>
          <hr className={`${nav_menu_hr} ${menu === "shop" ? "" : "hidden"}`} />
        </li>
        <li className={nav_menu_li}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ textDecoration: "none" }}
            to="/men"
          >
            Men
          </Link>
          <hr className={`${nav_menu_hr} ${menu === "men" ? "" : "hidden"}`} />
        </li>
        <li className={nav_menu_li}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ textDecoration: "none" }}
            to="/women"
          >
            Women
          </Link>
          <hr
            className={`${nav_menu_hr} ${menu === "women" ? "" : "hidden"}`}
          />
        </li>
        <li className={nav_menu_li}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ textDecoration: "none" }}
            to="/kids"
          >
            Kids
          </Link>
          <hr className={`${nav_menu_hr} ${menu === "kids" ? "" : "hidden"}`} />
        </li>
      </ul>
      <div className=" nav-login-cart flex items-center p-[0.1rem] md:gap-x-[2vw] gap-x-[2px] max-sm:gap-x-[2vw]">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ textDecoration: "none" }}
          to="/login"
        >
          <button
            className="px-[2.2vmin] py-[1vmin]  outline-none border-[1px] border-[#7a7a7a] rounded-full text-[#515151] text-[clamp(12px,4vw,30px)] font-medium cursor-pointer bg-white
        active:bg-[#f3f3f3]"
          >
            Login
          </button>
        </Link>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ textDecoration: "none" }}
          to="/cart"
        >
          <div className="relative flex cursor-pointer">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="text-[clamp(12px,4vw,32px)]"
            />
            <span className="nav-cart-count absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-red-500 text-white font-medium rounded-full px-[10%] text-[clamp(9px,2.3vmin,20px)]">
              {cartItems
                ? Object.values(cartItems).reduce((a, b) => a + b, 0)
                : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
