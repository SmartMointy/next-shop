"use client";

import simpleHash from "@/utils/simpleHash";
import FilterLabel from "./product-filter-label";

function ProductColor({
  label,
  color,
  value,
}: {
  label: string;
  color: string;
  value: string;
}) {
  const uniqueId = simpleHash(label).toString();
  return (
    <div>
      <input
        type="checkbox"
        id={uniqueId}
        name="color"
        value={value}
        className={"peer/[--peer] hidden h-4 w-4"}
        style={{ "--peer": uniqueId } as any}
      />
      <label
        htmlFor={uniqueId}
        style={{ "--peer": uniqueId } as any}
        className={
          "flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked/[--peer]:border-amber-400 peer-checked/[--peer]:text-stone-600"
        }
      >
        <span className="text-sm">{label}</span>
        <span className={`h-5 w-5 rounded ${color}`}></span>
      </label>
    </div>
  );
}

const colors = [
  { label: "Weiß", value: "white", color: "bg-stone-100" },
  { label: "Schwarz", value: "black", color: "bg-stone-900" },
  { label: "Blau", value: "blue", color: "bg-sky-600" },
  { label: "Grau", value: "grey", color: "bg-slate-300" },
  { label: "Grün", value: "green", color: "bg-emerald-500" },
  { label: "Beige", value: "beige", color: "bg-stone-200" },
  { label: "Braun", value: "brown", color: "bg-stone-600" },
  { label: "Rot", value: "red", color: "bg-red-400" },
  { label: "Gelb", value: "yellow", color: "bg-yellow-400" },
  { label: "Violett", value: "violet", color: "bg-violet-400" },
  { label: "Rosa", value: "rose", color: "bg-rose-400" },
  { label: "Pink", value: "pink", color: "bg-pink-400" },
];

// Naiv implementation
const ProductFilterSectionColor = function () {
  return (
    <>
      <FilterLabel label="Farbe" />

      <div className="mt-4 grid grid-cols-2 gap-3">
        {colors.map((color) => (
          <ProductColor
            key={color.value}
            label={color.label}
            value={color.value}
            color={color.color}
          />
        ))}
      </div>
    </>
  );
};

ProductFilterSectionColor.Skeleton = function () {
  return <p>TODO Skeleton</p>;
};

export default ProductFilterSectionColor;
