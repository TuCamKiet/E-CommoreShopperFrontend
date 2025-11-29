import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay flex mt-40">
      <div className="productdisplay-left flex gap-4">
        <div className="productdisplay-img-list flex flex-col gap-4">
          <img src={product.image} alt={product.image} className="h-40" />
          <img src={product.image} alt={product.image} />
          <img src={product.image} alt={product.image} />
          <img src={product.image} alt={product.image} />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img w-[30rem] h-[40rem]"
            src={product.image}
            alt={product.image}
          />
        </div>
      </div>
      <div className="productdisplay-right mt-16 flex flex-col">
        <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>
        <div className="productdisplay-right-stars flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices flex ml-10 gap-7 text-2xl font-bold">
          <div className="productdisplay-right-price-old text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vulputate purus eget erat facilisis, eu bibendum est bibendum.
          Suspendisse potenti. Vivamus dui neque, bibendum vel quam vel, congue
          pretium enim. Vivamus egestas consectetur nisl a convallis. Aenean et
          felis consectetur, suscipit diam sit amet, accumsan urna. Duis
          ultricies eros vel eleifend volutpat. Praesent a tincidunt ipsum, et
          blandit erat. Nulla sit amet tellus ut risus aliquam porttitor.
          Aliquam pulvinar luctus metus sed lacinia. Cras vehicula orci sed
          nulla rhoncus, non porta elit tincidunt.
        </div>
        <div className="productdisplay-right-size">
          <h1 className="mt-12 text-[#656565] text-xl font-semibold">
            Select Size
          </h1>
          <div className="productdisplay-right-sizes flex ml-7 gap-5">
            <div className="pl-4 pt-6 bg-[#fbfbfb] border-[0.065rem] border-[#ebebeb] rounded-sm cursor-pointer">
              S
            </div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="pl-5 pt-10 w-48 text-base font-semibold text-white bg-[#ff4141] mb-10 outline-none cursor-pointer border-none">
          ADD TO CART
        </button>
        <p className="productdisplay-right-category mt-2">
          <span className="font-semibold">Category :</span>Women, T-Shirt, Crop
          Top
        </p>
        <p className="productdisplay-right-tag">
          <span className="font-semibold">Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export { ProductDisplay };
