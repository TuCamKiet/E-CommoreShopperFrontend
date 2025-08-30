import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item } from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { demo_data } = useContext(ShopContext);
  return (
    <div className="shop-category w-full h-fit">
      <div className="shopcategory-banner flex">
        <div className="banner-left flex flex-1 border-2">
          <div className="flex flex-col">
            <h1>FLAT 50% OFF</h1>
            <p>12 Hours 20 Mins</p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className="banner-right flex flex-1 border-2">
          <img src={props.banner} alt={props.banner} />
        </div>
      </div>
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

export { ShopCategory };
