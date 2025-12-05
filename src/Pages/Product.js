import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { demo_data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = demo_data
    ? demo_data.find((p) => p.id === Number(productId))
    : [];
  return (
    <div className="product flex flex-col gap-[clamp(2rem,20vmin,10rem)]">
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export { Product };
