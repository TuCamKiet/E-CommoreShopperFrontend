import React from "react";
import { data_product } from "../Assets/demo_data";
import { Item } from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-2 h-[90vh]">
      <h1 className="text-[#171717] text-5xl font-semibold">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-48 h-1 rounded-lg border-2 border-[#252525] bg-[#252525]" />
      <div className="popular-item mt-12 flex gap-7">
        {data_product &&
          data_product.map((item, i) => {
            return <Item key={i} id={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export { Popular };
