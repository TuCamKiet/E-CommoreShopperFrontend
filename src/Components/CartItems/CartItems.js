import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { demo_data, cartItems } = useContext(ShopContext);

  const [quantities, setQuantities] = useState(
    Object.fromEntries(
      Object.entries(cartItems).map(([id, qty]) => [id, String(qty)])
    )
  );
  const handleQuantityChange = (itemId, e) => {
    let input = e.target.value.replace(/[^0-9]/g, "").replace(/^0+/, "");
    input = !input ? "0" : input;
    setQuantities((prev) => {
      return {
        ...prev,
        [itemId]: input,
      };
    });
    console.log(input);
  };

  useEffect(() => {
    console.log(quantities);
    console.log(cartItems);
  }, [quantities]);

  const cartitems_total_item = "flex justify-between pl-4";

  return (
    <div className="cartitems mx-[5%] mt-[clamp(1rem,6vmax,5rem)]">
      <table className="cartitems-format-main w-full items-center text-center text-balance text-[#454545] ">
        <thead>
          <tr className="text-[clamp(0.4rem,4vmin,1.5rem)] font-semibold border-[#e2e2e2] border-b-[clamp(0.1rem,1vmin,0.25rem)]">
            <th style={{ width: "8%" }}>Product</th>
            <th style={{ width: "32%" }}>Title</th>
            <th style={{ width: "15%" }}>Price</th>
            <th style={{ width: "15%" }}>Quantity</th>
            <th style={{ width: "15%" }}>Total</th>
            <th style={{ width: "15%" }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            Object.keys(cartItems).map((itemId, i) => {
              const product = demo_data.find((p) => p.id === Number(itemId));
              return product ? (
                <tr
                  key={i}
                  id={product.id}
                  className="cartitems-format text-[clamp(0.4rem,4vmin,1.25rem)] font-medium border-b-2"
                >
                  <td>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      style={{ textDecoration: "none" }}
                      to={`/product/${product.id}`}
                    >
                      <img
                        src={product.image}
                        alt={product.image}
                        className="carticon-product-icon p-[clamp(0.2rem,2vmin,0.5rem)] aspect-[1/1.3] object-cover object-center mx-auto"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      style={{ textDecoration: "none" }}
                      to={`/product/${product.id}`}
                      className="line-clamp-2"
                    >
                      {product.name}
                    </Link>
                  </td>
                  <td>${product.new_price}</td>
                  <td className="border-2">
                    <div className="flex border-2 items-center">
                      <FontAwesomeIcon
                        icon="fa-solid fa-minus"
                        className="cursor-pointer"
                      />
                      <input
                        value={quantities[itemId]}
                        type="text"
                        inputMode="numeric"
                        className="cartitems-quantity border-[#ebebeb] bg-[#fff] text-center outline-none border-2"
                        onChange={(e) => handleQuantityChange(itemId, e)}
                      />
                      <FontAwesomeIcon
                        icon="fa-solid fa-plus"
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                  <td>${product.new_price * quantities[itemId]}</td>
                  <td>
                    <FontAwesomeIcon
                      icon="fa-solid fa-trash-can"
                      className="cartitems-remove-icon cursor-pointer mx-auto"
                    />
                  </td>
                </tr>
              ) : (
                ""
              );
            })}
        </tbody>
      </table>
      {/* <div className="cartitems-down flex ml-24">
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
          <button className="w-64 h-14 outline-none bg-[#ff5a5a] text-[#fff] text-[clamp(0.4rem,4vmin,1.25rem)] font-semibold">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex-1 text-[clamp(0.4rem,4vmin,1.25rem)] font-medium text-[#555]">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox w-[31.5rem] mt-4 pl-5 h-14 bg-[#eaeaea] ">
            <input
              type="text"
              placeholder="Promo code"
              className="border-none outline-none bg-transparent w-80 h-12"
            />
            <button className="w-40 h-14 bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export { CartItems };
