"use client";

import simpleHash from "@/utils/simpleHash";
import FilterLabel from "./product-filter-label";

// TODO: label is not focusable
function ProductSize({ label }: { label: string }) {
  const uniqueId = simpleHash(label).toString();
  return (
    <div>
      <input
        type="checkbox"
        id={uniqueId}
        name="size"
        value={label.toLowerCase().replaceAll("-", "_")}
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
        <span className="text-xs">{label}</span>
      </label>
    </div>
  );
}

// Naiv implementation
const ProductFilterSectionSize = function () {
  return (
    <>
      <FilterLabel label="Größe" />

      <div className="mt-4 grid grid-cols-2 gap-3">
        <ProductSize label="X-SMALL" />
        <ProductSize label="SMALL" />
        <ProductSize label="MEDIUM" />
        <ProductSize label="LARGE" />
        <ProductSize label="X-LARGE" />
      </div>
    </>
  );
};

ProductFilterSectionSize.Skeleton = function () {
  return <p>TODO Skeleton</p>;
};

export default ProductFilterSectionSize;
