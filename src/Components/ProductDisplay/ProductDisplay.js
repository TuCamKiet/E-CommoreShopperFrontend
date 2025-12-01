import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useLayoutEffect, useState } from "react";

const ProductDisplay = (props) => {
  const { product } = props;

  const [rowToColReverse, setRowToColReverse] = useState(window.innerWidth <= 945);
  useLayoutEffect(() => {
    const handleResize = () => {
      setRowToColReverse(window.innerWidth <= 945);
    };
    // 2. Attach the defined function to the resize event
    window.addEventListener("resize", handleResize);
    // 3. Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const productdisplay_img_list_img = "h-[clamp(1.6rem,16vmin,5rem)] object-contain";
  const productdisplay_right_sizes_div = "p-[clamp(0.2rem,2vmin,1rem)] bg-[#fbfbfb]  border-[#ebebeb] rounded-3xl border-2 cursor-pointer";
  return (
    <div className="productdisplay flex w-11/12 max-md:flex-col gap-[clamp(0.2rem,2vmin,1rem)]  mx-auto my-[clamp(0.5rem,4vmax,2.5rem)] ">
      <div className={`productdisplay-left flex ${rowToColReverse?"flex-col-reverse justify-end":""} gap-[clamp(0.2rem,2vmin,1rem)]  items-start`}>
        <div className={`productdisplay-img-list flex ${rowToColReverse?"":"flex-col"} gap-[clamp(0.2rem,2vmin,1rem)]`}>
          <img src={product.image} alt={product.image} className={productdisplay_img_list_img} />
          <img src={product.image} alt={product.image} className={productdisplay_img_list_img} />
          <img src={product.image} alt={product.image} className={productdisplay_img_list_img} />
          <img src={product.image} alt={product.image} className={productdisplay_img_list_img} />
        </div>
        <div className="productdisplay-img max-md:w-full">
          <img
            className="productdisplay-main-img h-full md:max-h-[45rem] max-md:w-full object-contain"
            src={product.image}
            alt={product.image}
          />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col flex-1 ">
        <h1 className="text-[#3d3d3d] text-[clamp(0.75rem,7.5vmin,2.25rem)] font-bold">{product.name}</h1>
        <div className="productdisplay-right-stars flex items-center mt-[clamp(0.25rem,2.5vmin,0.75rem)] gap-[clamp(0.1rem,1vmin,0.25rem)] text-[clamp(0.4rem,4vmin,1.25rem)] text-[#1c1c1c]">
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <FontAwesomeIcon icon="fa-regular fa-star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices flex ml-[clamp(0.5rem,5vmin,1.75rem)] gap-[clamp(0.5rem,5vmin,1.75rem)] text-[clamp(0.4rem,4vmin,1.5rem)] font-bold">
          <div className="productdisplay-right-price-old text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description text-[clamp(0.4rem,4vmin,1.25rem)] ">
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
        <div className="productdisplay-right-size flex flex-col gap-[clamp(0.5rem,5vmin,1.75rem)]">
          <h1 className="mt-[clamp(1rem,6vmin,2.5rem)] text-[#656565] text-[clamp(0.4rem,4vmin,1.5rem)] font-semibold">
            Select Size
          </h1>
          <div className="productdisplay-right-sizes flex ml-[clamp(0.5rem,5vmin,1.75rem)] gap-[clamp(0.4rem,4vmin,1.25rem)]">
            <div className={productdisplay_right_sizes_div}>S</div>
            <div className={productdisplay_right_sizes_div}>M</div>
            <div className={productdisplay_right_sizes_div}>L</div>
            <div className={productdisplay_right_sizes_div}>XL</div>
            <div className={productdisplay_right_sizes_div}>XXL</div>
          </div>
          <button className="py-[clamp(0.4rem,4vmin,1.25rem)] px-[clamp(1rem,6vmin,2.5rem)] w-fit font-semibold text-white bg-[#ff4141] mb-10 outline-none rounded-full cursor-pointer border-none">
            ADD TO CART
          </button>
        </div>
        <p className="productdisplay-right-category text-[clamp(0.4rem,4vmin,1.25rem)]">
          <span className="font-semibold text-[clamp(0.4rem,4vmin,1.5rem)]">Category: </span>Women, T-Shirt, Crop
          Top
        </p>
        <p className="productdisplay-right-tag text-[clamp(0.4rem,4vmin,1.25rem)]">
          <span className="font-semibold text-[clamp(0.4rem,4vmin,1.5rem)]">Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export { ProductDisplay };
