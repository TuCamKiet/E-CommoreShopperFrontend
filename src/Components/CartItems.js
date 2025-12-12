import React, { useContext, useEffect, useMemo, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ConfirmModal } from "./ConfirmModal";

const CartItems = () => {
  const { demo_data, cartItems, setCartItems } = useContext(ShopContext);

  const cartProductMap = useMemo(() => {
    return Object.entries(cartItems).map(([itemId, quantity], i) => {
      const product = demo_data.find((p) => String(p.id) === itemId);
      return product
        ? [itemId, quantity, product.name, product.new_price, product.image]
        : [];
    });
  }, [cartItems, demo_data]);

  const [errorsQuantities, setErrorsQuantities] = useState({});
  const handleQuantityChange = (itemId, e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      setErrorsQuantities((prev) => ({
        ...prev,
        [itemId]: "Enter only positive integers",
      }));
      return;
    }

    const numeric = Number(value);

    if (numeric < 0) {
      setErrorsQuantities((prev) => ({
        ...prev,
        [itemId]: "Minimum value is 0",
      }));
      return;
    }

    if (numeric > 20) {
      setErrorsQuantities((prev) => ({
        ...prev,
        [itemId]: "Maximum value is 20",
      }));
      return;
    }

    if (numeric === 0) {
      setConfirmOpen(true);
      return;
    }

    setErrorsQuantities((prev) => ({ ...prev, [itemId]: null }));
    setCartItems((prev) => ({ ...prev, [itemId]: numeric }));
  };

  const handleQuantityIncrease = (itemId) => {
    let value = Number(cartItems[itemId]);
    if (value >= 20) {
      setErrorsQuantities((prev) => ({
        ...prev,
        [itemId]: "Maximum value is 20",
      }));
      return;
    }

    value += 1;

    setErrorsQuantities((prev) => ({ ...prev, [itemId]: null }));
    setCartItems((prev) => ({ ...prev, [itemId]: value }));
  };

  const handleQuantityDecrease = (itemId) => {
    let value = Number(cartItems[itemId]);
    if (value <= 0) {
      setErrorsQuantities((prev) => ({
        ...prev,
        [itemId]: "Minimum value is 0",
      }));
      return;
    }

    value -= 1;

    if (value === 0) {
      setConfirmOpen(true);
      return;
    }

    setErrorsQuantities((prev) => ({ ...prev, [itemId]: null }));
    setCartItems((prev) => ({ ...prev, [itemId]: value }));
  };

  const [confirmOpen, setConfirmOpen] = useState(false);
  /*  Sao ko delete trực tiếp mà cần new obj ?
  Vì React không nhận ra thay đổi state nếu bạn mutate trực tiếp object cũ.
  
  Đây là một trong những “luật cứng” của React:
  ➡️ State phải được cập nhật bằng cách tạo ra một object mới (immutable update).
  ➡️ Nếu bạn sửa trực tiếp object cũ → React sẽ không re - render.
   ai vì:
  
   prev và state mới cùng reference trong memory
  
   React so sánh => không thấy state khác đi
  
   → Không re-render UI
  
   → Remove button không hoạt động hoặc UI không cập nhật*/
  const handleQuantityRemove = (itemId) => {
    setCartItems((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });

    setErrorsQuantities((prev) => {
      const newErrorsQuantities = { ...prev };
      delete newErrorsQuantities[itemId];
      return newErrorsQuantities;
    });

    setConfirmOpen(false);
  };

  const subtotal = useMemo(() => {
    return cartProductMap.reduce(
      (sum, [, quantity, , new_price]) => sum + (new_price || 0) * quantity,
      0
    );
  }, [cartProductMap]);

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const cartitems_total_item =
    "flex justify-between text-[clamp(0.4rem,4vmin,1.25rem)] pl-[clamp(0.32rem,3.2vmin,1rem)] py-[clamp(0.16rem,1.6vmin,0.5rem)]";

  return (
    <div className="cartitems flex flex-col px-[5%] pt-[clamp(1rem,6vmax,5rem)] gap-[clamp(1.8rem,18vmin,10rem)]">
      <table className="cartitems-format-main w-full items-center text-center text-balance text-[#454545] gap-[clamp(0.2rem,2vmin,0.625rem)]">
        <thead>
          <tr className="sm:text-[clamp(0.4rem,4vmin,1.5rem)] text-[clamp(0.4rem,4vmin,1.25rem)] font-semibold border-[#e2e2e2] border-b-[clamp(0.1rem,1vmin,0.25rem)]">
            <th style={{ width: "8%" }}>Product</th>
            <th style={{ width: "32%" }}>Title</th>
            <th style={{ width: "15%" }}>Price</th>
            <th style={{ width: "15%" }}>Quantity</th>
            <th style={{ width: "15%" }}>Total</th>
            <th style={{ width: "15%" }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartProductMap &&
            cartProductMap.map(
              ([itemId, quantity, name, new_price, image], i) => {
                return (
                  <tr
                    key={i}
                    id={itemId}
                    className="cartitems-format sm:text-[clamp(0.4rem,4vmin,1.25rem)] text-[clamp(0.32rem,3.2vmin,1rem)] font-medium border-b-[clamp(0.05rem,0.5vmin,0.125rem)]"
                  >
                    <td>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        style={{ textDecoration: "none" }}
                        to={`/product/${itemId}`}
                      >
                        <img
                          src={image}
                          alt={image}
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
                        to={`/product/${itemId}`}
                        className="line-clamp-2"
                      >
                        {name}
                      </Link>
                    </td>
                    <td>${new_price}</td>
                    <td>
                      <div className="flex flex-nowrap w-fit mx-auto items-center justify-center relative">
                        <FontAwesomeIcon
                          icon="fa-solid fa-minus"
                          className="cursor-pointer bg-[#454545] text-white rounded sm:size-[clamp(0.4rem,4vmin,1.25rem)] size-[clamp(0.32rem,3.2vmin,1rem)] py-[1%] px-[2%]"
                          onClick={() => handleQuantityDecrease(itemId)}
                        />
                        <input
                          value={quantity}
                          type="text"
                          inputMode="numeric"
                          className="cartitems-quantity sm:w-[clamp(0.8rem,8vmin,2.5rem)] w-[clamp(0.72rem,7.2vmin,2.25rem)] sm:mx-[clamp(0.2rem,2vmin,0.625rem)] border-[#ebebeb] bg-[#fff] text-center outline-none"
                          onChange={(e) => handleQuantityChange(itemId, e)}
                        />
                        <FontAwesomeIcon
                          icon="fa-solid fa-plus"
                          className="cursor-pointer bg-[#454545] text-white rounded sm:size-[clamp(0.4rem,4vmin,1.25rem)] size-[clamp(0.32rem,3.2vmin,1rem)] py-[1%] px-[2%]"
                          onClick={() => handleQuantityIncrease(itemId)}
                        />
                        {errorsQuantities[itemId] && (
                          <div className="absolute top-full left-0 mt-[3%] bg-red-100 text-red-700 text-[clamp(0.28rem,2.8vmin,0.875rem)] py-[1.5%] px-[5%] rounded shadow-md whitespace-nowrap z-40">
                            ⚠ {errorsQuantities[itemId]}
                          </div>
                        )}
                        <ConfirmModal
                          open={confirmOpen}
                          message="Are you sure you want to remove this item?"
                          onConfirm={() => handleQuantityRemove(itemId)}
                          onCancel={() => setConfirmOpen(false)}
                        />
                      </div>
                    </td>
                    <td>${new_price * quantity}</td>
                    <td>
                      <FontAwesomeIcon
                        icon="fa-solid fa-trash-can"
                        className="cartitems-remove-icon cursor-pointer mx-auto"
                        onClick={() => setConfirmOpen(true)}
                      />
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
      <div className="cartitems-down flex max-sm:flex-col-reverse md:mx-[3%] md:gap-[10%] sm:gap-[5%] gap-[clamp(1.8rem,18vmin,10rem)]">
        <div className="cartitems-total flex flex-1 flex-col gap-[clamp(1rem,6vmin,2rem)]">
          <h1 className="text-[clamp(0.4rem,4vmin,1.5rem)] font-semibold">
            Cart Totals
          </h1>
          <div>
            <div className={cartitems_total_item}>
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className={cartitems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={`${cartitems_total_item} font-semibold`}>
              <h3>Total</h3>
              <h3>${subtotal}</h3>
            </div>
          </div>
          <button className="bg-[#ff5a5a] text-[#fff] text-[clamp(0.4rem,4vmin,1.25rem)] lg:px-[clamp(1rem,6vmin,5rem)] px-[clamp(0.3rem,2vmin,1rem)] max-sm:px-[clamp(1rem,6vmin,5rem)] py-[clamp(0.3rem,2vmin,1rem)]  w-fit font-semibold">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex-1 text-[clamp(0.4rem,4vmin,1.25rem)] font-medium text-[#555] ">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox flex mt-[clamp(1rem,6vmin,2rem)] xl:w-10/12 w-11/12 ">
            <input
              type="text"
              placeholder="Promo code"
              className="border-none outline-none w-full px-[clamp(0.4rem,4vmin,1.25rem)] bg-[#eaeaea]"
            />
            <button className="lg:px-[clamp(1rem,6vmin,5rem)] px-[clamp(0.3rem,2vmin,1rem)] max-sm:px-[clamp(1rem,6vmin,5rem)] py-[clamp(0.3rem,2vmin,1rem)]  bg-black text-[#fff] cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItems };
