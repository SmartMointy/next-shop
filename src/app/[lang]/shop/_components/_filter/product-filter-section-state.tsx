"use client";

import { useState } from "react";
import FilterLabel from "./product-filter-label";

// Naiv implementation
const ProductFilterSectionState = function () {
  const [active, setActive] = useState(0);
  return (
    <>
      <FilterLabel label="Artikel Zustand" />

      <div className="flex h-10 items-center justify-evenly rounded bg-[#F4F4F4] text-sm ">
        <div
          onClick={() => setActive(0)}
          className={`flex h-full w-full cursor-pointer items-center justify-center rounded border ${active === 0 ? "border-[#D99800] bg-white" : "border-[#F4F4F4]"}`}
        >
          <p>Alle</p>
        </div>

        <div
          onClick={() => setActive(1)}
          className={`flex h-full w-full cursor-pointer items-center justify-center rounded border ${active === 1 ? "border-[#D99800] bg-white" : "border-[#F4F4F4]"}`}
        >
          <p>Neu</p>
        </div>

        <div
          onClick={() => setActive(2)}
          className={`flex h-full w-full cursor-pointer items-center justify-center rounded border px-6 ${active === 2 ? "border-[#D99800] bg-white" : "border-[#F4F4F4]"}`}
        >
          <p>Gebraucht</p>
        </div>
      </div>
    </>
  );
};

ProductFilterSectionState.Skeleton = function () {
  return <p>TODO Skeleton</p>;
};

export default ProductFilterSectionState;
