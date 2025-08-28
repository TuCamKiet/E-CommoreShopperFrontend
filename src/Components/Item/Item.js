import React from "react";

const Item = ({ item }) => {
  return (
    <div className="item flex-none w-48 sm:w-80 transition-transform duration-[600ms] hover:scale-105 cursor-pointer">
      <img src={item.image} alt={item.image} className="w-full object-cover" />
      <p className="mt-1 text-[clamp(0.4rem,4vmin,1.5rem)]">{item.name}</p>
      <div className="item-prices flex gap-[clamp(0.4rem,4vmin,1.25rem)]">
        <div className="item-price-new text-[#374151] text-[clamp(0.37rem,3.7vmin,1.125rem)] font-semibold">
          {item.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-[clamp(0.37rem,3.7vmin,1.125rem)] font-medium line-through">
          {item.old_price}
        </div>
      </div>
    </div>
  );
};

export { Item };
