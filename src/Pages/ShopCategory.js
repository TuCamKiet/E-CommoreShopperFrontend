import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kids_banner from "../Components/Assets/kids_banner.png";
import men_banner from "../Components/Assets/men_banner.png";
import women_banner from "../Components/Assets/women_banner.png";
import { GridTemplate } from "../Components/Popular/GridTemplate";

const ShopCategory = (props) => {
  const { demo_data } = useContext(ShopContext);

  return (
    <div className="shop-category min-w-fit w-10/12 h-fit flex flex-col items-center pt-[clamp(0.5rem,2vmax,2rem)]">
      <div className="shopcategory-banner flex w-full h-fit items-center bg-[linear-gradient(90deg,#FCDFE0,#e1ffea22_80%)] ">
        <div className="banner-left flex flex-1 sm:flex-[2] justify-center ">
          <div className="flex flex-col p-[clamp(0.4rem,4vmin,1.25rem)]">
            <h1 className="text-[#F67129] text-[clamp(1rem,9vmin,4.5rem)] font-semibold leading-none">
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
            src={
              props.category === "men"
                ? men_banner
                : props.category === "women"
                ? women_banner
                : props.category === "kids"
                ? kids_banner
                : null
            }
            alt="banner"
            className="object-contain h-auto"
          />
        </div>
      </div>
      <div className="shopcategory-indexSort flex w-full justify-between items-center mt-[clamp(0.5rem,4vmax,2.5rem)] px-[clamp(0.5rem,4vmin,1.25rem)] text-[clamp(0.4rem,4vmin,1.5rem)]">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex items-center justify-center text-center py-[clamp(0.07rem,1vmin,0.5rem)] px-[clamp(0.2rem,2vmin,1rem)] rounded-full border-[0.07rem] border-[#888] cursor-pointer">
          Sort by &nbsp;
          <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        </div>
      </div>
      <GridTemplate
        title={null}
        componentClassName={"shopcategory-products"}
        itemClassName={"shopcategory-products-items"}
        data={
          demo_data &&
          demo_data.filter((item) => item.category === props.category)
        }
        maxRow={10}
      />
      <div className="shopcategory-loadmore flex justify-center items-center mt-[clamp(1rem,6vmax,5rem)] px-[clamp(1rem,6vmin,5rem)] py-[clamp(0.3rem,2vmin,1rem)] rounded-full bg-[#ededed] text-[#787878] text-[clamp(0.4rem,4vmin,1.5rem)] font-medium cursor-pointer">
        Explore More
      </div>
    </div>
  );
};

export { ShopCategory };
