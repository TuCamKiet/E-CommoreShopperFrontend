import React, { useLayoutEffect, useRef, useState } from "react";
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
  const [visibleItemsPerRow, setVisibleItemsPerRow] = useState(1);

  //useEffect: Chạy sau khi React đã render và paint DOM ra màn hình
  //useLayoutEffect: Chạy ngay sau khi DOM đã được cập nhật nhưng trước khi browser paint ra màn hình (tránh vấn đề itemWidth = 0 khi data chưa load kịp)
  useLayoutEffect(() => {
    const calcItemsPerRow = () => {
      if (containerRef.current && itemRef.current && data) {
        // width của 1 item
        const itemWidth = itemRef.current.offsetWidth;

        // gap lấy từ CSS
        const style = window.getComputedStyle(containerRef.current);
        const gap = parseInt(style.gap) || 0;

        const newVisibleItemsPerRow =
          Math.min(
            Math.floor(window.innerWidth / (itemWidth + gap)),
            Math.floor(data.length)
          ) || 1;

        setVisibleItemsPerRow((prev) => {
          if (prev !== newVisibleItemsPerRow) return newVisibleItemsPerRow;
          return prev;
        });
      }
    };

    calcItemsPerRow();
    window.addEventListener("resize", calcItemsPerRow);

    return () => {
      window.removeEventListener("resize", calcItemsPerRow);
    };
  }, [data]);

  return (
    <div
      className={`${componentClassName} flex flex-col items-center gap-[clamp(0.33rem,3.3vmin,0.5rem)] h-fit w-full`}
    >
      <h1 className="text-[#171717] text-[clamp(1rem,10vmin,3rem)] font-semibold text-center">
        {title}
      </h1>
      <hr className="w-[clamp(4rem,40vmin,12rem)] h-[clamp(0.1rem,1vmin,0.25rem)] rounded-full border-2 border-[#252525] bg-[#252525]" />
      <div
        className={`${itemClassName} mt-[clamp(0.7rem,7vmin,3rem)] grid gap-[clamp(0.7rem,7vmin,1.75rem)]`}
        style={{
          gridTemplateColumns: `repeat(${visibleItemsPerRow}, 1fr)`,
        }}
        ref={containerRef}
      >
        {data &&
          data.slice(0, visibleItemsPerRow * maxRow).map((item, i) => {
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
