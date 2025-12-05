import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDisplay = (props) => {
  const { product } = props;

  const productdisplay_img_list_img =
    "h-[clamp(1.5rem,15vmin,5rem)] object-contain";
  const productdisplay_right_sizes_div =
    "p-[clamp(0.2rem,2vmin,1rem)] bg-[#fbfbfb]  border-[#ebebeb] rounded-full border-[0.07rem] hover:text-[#ff4141] hover:border-[#ff4141] cursor-pointer";
  return (
    <div className="productdisplay flex max-md:flex-col gap-[clamp(0.5rem,5vmin,1.75rem)] px-[5%] my-[clamp(0.5rem,4vmax,2.5rem)] ">
      <div className="productdisplay-left flex max-lg:flex-col-reverse max-lg:justify-end gap-[clamp(0.2rem,2vmin,1rem)] items-start">
        <div className="productdisplay-img-list flex flex-shrink-0 lg:flex-col gap-[clamp(0.2rem,2vmin,1rem)]">
          <img
            src={product.image}
            alt={product.image}
            className={productdisplay_img_list_img}
          />
          <img
            src={product.image}
            alt={product.image}
            className={productdisplay_img_list_img}
          />
          <img
            src={product.image}
            alt={product.image}
            className={productdisplay_img_list_img}
          />
          <img
            src={product.image}
            alt={product.image}
            className={productdisplay_img_list_img}
          />
        </div>
        <div className="productdisplay-img w-full">
          <img
            className="productdisplay-main-img h-full md:max-h-[45rem] w-full object-contain"
            src={product.image}
            alt={product.image}
          />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col flex-1">
        <h1 className="text-[#3d3d3d] text-[clamp(0.75rem,7.5vmin,2.25rem)] font-bold">
          {product.name}
        </h1>
        <div className="productdisplay-right-stars flex items-center mt-[clamp(0.25rem,2.5vmin,0.75rem)] gap-[clamp(0.1rem,1vmin,0.25rem)] text-[clamp(0.4rem,4vmin,1.25rem)] text-[#1c1c1c]">
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            className="text-[#FED42E] cursor-pointer"
            onMouseEnter={() => {}}
          />
          <FontAwesomeIcon
            icon="fa-regular fa-star"
            className="text-[#FED42E] cursor-pointer"
          />
          <FontAwesomeIcon
            icon="fa-regular fa-star"
            className="text-[#FED42E] cursor-pointer"
          />
          <FontAwesomeIcon
            icon="fa-regular fa-star"
            className="text-[#FED42E] cursor-pointer"
          />
          <FontAwesomeIcon
            icon="fa-regular fa-star"
            className="text-[#FED42E] cursor-pointer"
          />
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
          <div className="productdisplay-right-sizes flex ml-[clamp(0.5rem,5vmin,1.75rem)] gap-[clamp(0.4rem,4vmin,1.25rem)] text-[clamp(0.4rem,4vmin,1.25rem)]">
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
          <span className="font-semibold text-[clamp(0.4rem,4vmin,1.5rem)]">
            Category:{" "}
          </span>
          Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-tag text-[clamp(0.4rem,4vmin,1.25rem)]">
          <span className="font-semibold text-[clamp(0.4rem,4vmin,1.5rem)]">
            Tags:{" "}
          </span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export { ProductDisplay };
