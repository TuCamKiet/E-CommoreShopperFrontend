import React, { useEffect, useRef, useState } from "react";
import { Item } from "../Item/Item";

const GridTemplate = ({
  title,
  componentClassName,
  itemClassName,
  data,
  maxRow = 2,
}) => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(1);
  const [gridCols, setGridCols] = useState(null);

  useEffect(() => {
    const calcItemsPerRow = () => {
      if (containerRef.current && itemRef.current && data) {
        // width của 1 item
        const itemWidth = itemRef.current.offsetWidth;

        // gap lấy từ CSS
        const style = window.getComputedStyle(containerRef.current);
        const gap = parseInt(style.gap) || 0;

        const newVisibleItems =
          Math.min(
            Math.floor(window.innerWidth / (itemWidth + gap)),
            Math.floor(data.length / 2)
          ) || 1;

        setVisibleItems((prev) => {
          if (prev !== newVisibleItems) {
            setGridCols({
              display: "grid",
              gridTemplateColumns: `repeat(${newVisibleItems}, 1fr)`,
            });
            return newVisibleItems;
          }
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
    <div
      className={`${componentClassName} flex flex-col items-center gap-[clamp(0.33rem,3.3vmin,0.5rem)] h-fit w-full`}
    >
      <h1 className="text-[#171717] text-[clamp(1rem,10vmin,3rem)] font-semibold text-center">
        {title}
      </h1>
      <hr className="w-[clamp(4rem,40vmin,12rem)] h-[clamp(0.1rem,1vmin,0.25rem)] rounded-full border-2 border-[#252525] bg-[#252525]" />
      <div
        className={`${itemClassName} mt-[clamp(0.7rem,7vmin,3rem)] gap-[clamp(0.7rem,7vmin,1.75rem)]`}
        style={gridCols}
        ref={containerRef}
      >
        {data &&
          data.slice(0, visibleItems * maxRow).map((item, i) => {
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

export { GridTemplate };
