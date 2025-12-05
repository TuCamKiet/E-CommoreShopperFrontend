import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItems = () => {
  const { demo_data, cartItems } = useContext(ShopContext);

  const cartitems_total_item = "flex justify-between pl-4";

  return (
    <div className="cartitems ml-24 mt-40">
      <div className="cartitems-format-main grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-16 pl-5 text-[#454545] text-lg font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-[#e2e2e2] border-0" />
      {cartItems &&
        Object.keys(cartItems).map((itemId, i) => {
          const product = demo_data.find((p) => p.id === Number(itemId));
          return product ? (
            <div key={i} id={product.id}>
              <div className="cartitems-format grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-16 pl-5 text-[#454545] text-base font-medium">
                <img
                  src={product.image}
                  alt={product.image}
                  className="carticon-product-icon h-16 object-contain"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <div className="cartitems-quantity w-16 h-12 border-2 border-[#ebebeb] bg-[#fff] cursor-pointer">
                  {cartItems[itemId]}
                </div>
                <p>${product.new_price * cartItems[itemId]}</p>
                <FontAwesomeIcon
                  icon="fa-solid fa-trash-can"
                  className="cartitems-remove-icon w-4 mt-10 cursor-pointer"
                />
              </div>
              <hr />
            </div>
          ) : (
            <div></div>
          );
        })}
      <div className="cartitems-down flex ml-24">
        <div className="cartitems-total flex flex-1 flex-col mr-48 gap-10">
          <h1 className="text-lg font-semibold">Cart Totals</h1>
          <div>
            <div className={cartitems_total_item}>
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className={cartitems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={`${cartitems_total_item} font-semibold text-lg`}>
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button className="w-64 h-14 outline-none bg-[#ff5a5a] text-[#fff] text-base font-semibold">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex-1 text-base font-medium">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox w-[31.5rem] mt-4 pl-5 h-14 bg-[#eaeaea] border-2">
            <input
              type="text"
              placeholder="Promo code"
              className="border-none outline-none bg-transparent text-base w-80 h-12"
            />
            <button className="w-40 h-14 bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItems };
