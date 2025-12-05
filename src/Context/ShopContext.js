import React, { createContext, useEffect, useState } from "react";
import { demo_data } from "../Components/Assets/demo_data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    //sessionStorage.clear();
    const cart = sessionStorage.getItem("cart");
    return cart ? JSON.parse(cart) : {};
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(JSON.parse(sessionStorage.getItem("cart")));
  }, [cartItems]);

  const contextValue = {
    demo_data,
    cartItems,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
