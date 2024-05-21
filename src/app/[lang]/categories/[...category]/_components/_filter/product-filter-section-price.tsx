"use client";

import * as Slider from "@radix-ui/react-slider";
import { useSearchParams } from "next/navigation";

import { useState } from "react";
import FilterLabel from "./product-filter-label";

const initialMinPrice = 0;
const initialMaxPrice = 80;

// Back button problems
// Naiv implementation (causing 3 rerenders instead of 1)
const ProductFilterSectionPrice = function () {
  const searchParams = useSearchParams();
  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("min_price")) || initialMinPrice,
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("max_price")) || initialMaxPrice,
  );

  return (
    <>
      <FilterLabel label="Preis" />

      <div>
        <div className="mb-2 flex justify-between text-sm">
          <p>{minPrice}€</p>
          <p>{maxPrice}€</p>
        </div>
        <Slider.Root
          defaultValue={[minPrice, maxPrice]}
          name={"price"}
          value={[minPrice ?? initialMinPrice, maxPrice ?? initialMaxPrice]}
          min={0}
          max={150} // optimistic
          onValueChange={(values) => {
            setMinPrice(values[0]);
            setMaxPrice(values[1]);
          }}
          className="relative flex h-5 w-full items-center"
        >
          <Slider.Track className="relative h-1 flex-grow rounded-full bg-stone-200">
            <Slider.Range className="absolute h-full  bg-os" />
          </Slider.Track>

          <Slider.Thumb className="block h-5 w-5 cursor-pointer rounded-full bg-amber-500 outline-2 outline-offset-0 outline-amber-300" />
          <Slider.Thumb className="block h-5 w-5 cursor-pointer rounded-full bg-amber-500 outline-2 outline-offset-0 outline-amber-300" />
        </Slider.Root>
      </div>
    </>
  );
};

ProductFilterSectionPrice.Skeleton = function () {
  return <p>TODO Skeleton</p>;
};

export default ProductFilterSectionPrice;
