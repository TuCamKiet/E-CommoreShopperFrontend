import React, { createContext } from "react";
import { demo_data } from "../Components/Assets/demo_data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { demo_data };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
