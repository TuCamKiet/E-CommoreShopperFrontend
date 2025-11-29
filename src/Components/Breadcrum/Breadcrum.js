import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum flex items-center gap-2 text-[#5e5e5e] text-base font-semibold ml-14 mt-40 capitalize">
      <Link style={{ textDecoration: "none" }} to="/">
        Shop
        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/${product.category}`}>
        {product.category}
        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
      </Link>
      {product.name}
    </div>
  );
};

export { Breadcrum };
