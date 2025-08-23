import React from "react";

const Item = ({ item }) => {
  return (
    <div className="item w-80 transition-transform duration-[600ms] hover:scale-105 w-52">
      <img src={item.image} alt={item.image} className="w-full object-cover" />
      <p className="mt-1">{item.name}</p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new text-[#374151] text-lg font-semibold">
          {item.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-lg font-medium line-through">
          {item.old_price}
        </div>
      </div>
    </div>
  );
};

export { Item };
