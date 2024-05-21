"use client";

import { ProductsType } from "@/db/schemas/products";

import ShoppingCartSVG from "@/assets/icons/shopping-bag.svg";
import { useState } from "react";

const availableColorss = ["bg-red-600", "bg-sky-600", "bg-emerald-600"];

const ProductCard = function ({ data }: { data: ProductsType }) {
  const availableColors = ["red", "sky", "emerald"];
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className={`group w-full cursor-pointer rounded-md p-2 `}>
      <div
        className={`h-60 rounded-md bg-slate-400 transition-all group-hover:scale-105`}
      ></div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="line-clamp-1">{data.name}</p>
          <p>{data.used}€</p>
        </div>
        <div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-stone-200">
            <ShoppingCartSVG />
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        {availableColors.map((color, i) =>
          selectedColor === i ? (
            <span
              className={`m-1 block h-3 w-3 rounded-full p-1 ring-offset-1 ${selectedColor === i ? "ring-2" : ""} ring-${color}-700 bg-${color}-600`}
            ></span>
          ) : (
            <span
              className={`block h-4 w-4 rounded-full bg-${color}-600`}
            ></span>
          ),
        )}
      </div>
    </div>
  );
};

ProductCard.Skeleton = function () {
  return <p>TODO: Skeleton</p>;
};

export default ProductCard;
