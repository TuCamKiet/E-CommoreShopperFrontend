import React, { useContext } from "react";
import { GridTemplate } from "./GridTemplate";
import { ShopContext } from "../Context/ShopContext";

const Popular = () => {
  const { demo_data } = useContext(ShopContext);
  return (
    <>
      <GridTemplate
        title={"POPULAR IN WOMEN"}
        componentClassName={"npopular"}
        itemClassName={"popular-item"}
        data={demo_data}
        maxRow={2}
      />
    </>
  );
};

export { Popular };
