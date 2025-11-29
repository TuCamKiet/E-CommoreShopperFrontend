import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { demo_data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = demo_data
    ? demo_data.find((p) => p.id === Number(productId))
    : [];
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export { Product };
