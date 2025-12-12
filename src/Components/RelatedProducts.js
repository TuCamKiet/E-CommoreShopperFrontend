import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { GridTemplate } from "./GridTemplate";

const RelatedProducts = () => {
  const { demo_data } = useContext(ShopContext);
  return (
    <>
      <GridTemplate
        title={"Related Products"}
        componentClassName={"relatedproducts"}
        itemClassName={"relatedproducts-item"}
        data={demo_data}
        maxRow={2}
      />
    </>
  );
};

export { RelatedProducts };
