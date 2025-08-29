import React from "react";
import { GridTemplate } from "../Popular/GridTemplate";
import { demo_data } from "../Assets/demo_data";

const NewCollections = () => {
  return (
    <>
      <GridTemplate
        title={"NEW COLLECTIONS"}
        componentClassName={"new-collections"}
        itemClassName={"collections"}
        data={demo_data}
      />
    </>
  );
};

export { NewCollections };
