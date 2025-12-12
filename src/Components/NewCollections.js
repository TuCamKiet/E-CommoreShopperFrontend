import React, { useContext } from "react";
import { GridTemplate } from "./GridTemplate";
import { ShopContext } from "../Context/ShopContext";

const NewCollections = () => {
  const { demo_data } = useContext(ShopContext);

  return (
    <>
      <GridTemplate
        title={"NEW COLLECTIONS"}
        componentClassName={"new-collections"}
        itemClassName={"collections"}
        data={demo_data}
        maxRow={2}
      />
    </>
  );
};

export { NewCollections };
