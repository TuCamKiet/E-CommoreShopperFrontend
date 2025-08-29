import React from "react";
import { demo_data } from "../Assets/demo_data";
import { GridTemplate } from "./GridTemplate";

const Popular = () => {
  return (
    <>
      <GridTemplate
        title={"POPULAR IN WOMEN"}
        componentClassName={"npopular"}
        itemClassName={"popular-item"}
        data={demo_data}
      />
    </>
  );
};

export { Popular };
