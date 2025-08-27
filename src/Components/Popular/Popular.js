import React, { useEffect, useRef, useState } from "react";
import { data_product } from "../Assets/demo_data";
import { Item } from "../Item/Item";

const Popular = () => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const calcItemsPerRow = () => {
      if (containerRef.current && itemRef.current) {
        // width của 1 item
        const itemWidth = itemRef.current.offsetWidth;

        // gap lấy từ CSS
        const style = window.getComputedStyle(containerRef.current);
        const gap = parseInt(style.gap) || 0;

        const newVisibleItems =
          Math.min(
            Math.floor(window.innerWidth / (itemWidth + gap)),
            data_product.length
          ) || 1;

        setVisibleItems((prev) => {
          if (prev !== newVisibleItems) return newVisibleItems;
          return prev;
        });
      }
    };

    calcItemsPerRow();
    window.addEventListener("resize", calcItemsPerRow);

    return () => {
      window.removeEventListener("resize", calcItemsPerRow);
    };
  }, []);

  return (
    <div className="popular flex flex-col items-center gap-2 h-fit">
      <h1 r className="text-[#171717] text-5xl font-semibold">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-48 h-1 rounded-lg border-2 border-[#252525] bg-[#252525]" />
      <div className="popular-item mt-12 flex gap-7" ref={containerRef}>
        {data_product &&
          data_product.slice(0, visibleItems).map((item, i) => {
            return (
              <div key={i} ref={i === 0 ? itemRef : null}>
                <Item key={i} id={item.id} item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { Popular };
