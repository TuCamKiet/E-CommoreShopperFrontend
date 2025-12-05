import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum flex flex-wrap items-center w-11/12 m-auto gap-[clamp(0.33rem,3.3vmin,0.5rem)] mt-[clamp(0.5rem,4vmax,2.5rem)]  text-[#5e5e5e] text-[clamp(0.4rem,4vmin,1.25rem)] font-semibold  capitalize">
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ textDecoration: "none" }}
        to="/"
      >
        Shop
        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
      </Link>
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ textDecoration: "none" }}
        to={`/${product.category}`}
      >
        {product.category}
        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
      </Link>
      {product.name}
    </div>
  );
};

export { Breadcrum };
