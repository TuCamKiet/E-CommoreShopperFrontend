import React, { useContext, useLayoutEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item } from "../Components/Item/Item";
import kids_banner from "../Components/Assets/kids_banner.png";
import men_banner from "../Components/Assets/men_banner.png";
import women_banner from "../Components/Assets/women_banner.png";

const ShopCategory = (props) => {
  const { demo_data } = useContext(ShopContext);

  let banner = null;
  switch (props.category) {
    case "men":
      banner = men_banner;
      break;
    case "women":
      banner = women_banner;
      break;
    case "kids":
      banner = kids_banner;
      break;
    default:
      banner = null;
  }

  return (
    <div className="shop-category w-full h-fit flex flex-col items-center">
      <ShopCategoryBanner banner={banner} />;
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        </div>
      </div>
      <div className="shopcategory-products">
        {demo_data.map((item, i) => {
          return props.category === item.category ? (
            <Item key={i} id={item.id} item={item} />
          ) : null;
        })}
      </div>
    </div>
  );
};

const ShopCategoryBanner = ({ banner }) => {
  return (
    <div className="shopcategory-banner flex min-w-fit w-10/12 h-fit items-center bg-[linear-gradient(90deg,#FCDFE0,#e1ffea22_80%)] ">
      <div className="banner-left flex flex-[2] justify-center ">
        <div className="flex flex-col p-[clamp(0.4rem,4vmin,1.25rem)]">
          <h1 className="text-[#F67129] text-[clamp(1rem,10vmin,4.5rem)] font-semibold leading-none">
            FLAT 50% OFF
          </h1>
          <p className="text-[#171717] text-[clamp(0.5rem,4.5vmin,2.25rem)] font-semibold pt-[1.5vmin]">
            <span className="text-[#F67129]">12</span> Hours{" "}
            <span className="text-[#F67129]">20</span> Mins
          </p>
          <button className="w-[clamp(0.5rem,40vmin,16rem)] h-[clamp(1rem,8.5vmin,4rem)] rounded-full bg-[#F67129] text-white text-[clamp(0.4rem,4vmin,1.25rem)] font-medium mt-[clamp(0.5rem,2.5vmin,1.5rem)] cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>
      <div className="banner-right max-h-[21rem] flex flex-1 justify-center">
        <img
          src={banner}
          alt={banner}
          className="object-contain w-[70%] h-auto"
        />
      </div>
    </div>
  );
};

export { ShopCategory };
