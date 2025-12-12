import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox";
import { RelatedProducts } from "../Components/RelatedProducts";

const Product = () => {
  const { demo_data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = demo_data.find((p) => p.id === Number(productId));
  return product ? (
    <div className="product flex flex-col gap-[clamp(2rem,20vmin,10rem)]">
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  ) : (
    <div>Không tìm thấy sản phẩm</div>
  );
};

export { Product };
