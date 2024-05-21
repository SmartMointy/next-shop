"use client";

import * as Select from "@radix-ui/react-select";
import React from "react";

import FilterLabel from "./product-filter-label";

const SelectItem: (props: any) => any = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      // @ts-ignore
      <Select.Item
        className="relative flex h-7 cursor-pointer items-center rounded p-4 text-sm outline-amber-400 hover:bg-amber-100"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  },
);

// TODO: intl
const ProductFilterSectionSorting = function ({ initialValue }: any) {
  return (
    <>
      <FilterLabel label="Sortieren nach" />
      <Select.Root defaultValue={initialValue ?? "popularity"} name="sort_by">
        <Select.Trigger
          className="h-10 w-full gap-1 rounded border border-stone-200 bg-white px-4 text-start text-sm outline-amber-400"
          aria-label="Food"
        >
          <Select.Value />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            className="mt-2 w-[--radix-select-trigger-width] overflow-hidden rounded border border-stone-200 bg-white shadow"
          >
            <Select.Viewport className="p-2">
              <SelectItem value="popularity">Beliebteste</SelectItem>
              <SelectItem value="date">Neuste zuerst</SelectItem>
              <SelectItem value="lowest_price">Niedrigster Preis</SelectItem>
              <SelectItem value="highest_price">Höchster Preis</SelectItem>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

ProductFilterSectionSorting.Skeleton = function () {
  return <p>TODO Skeleton</p>;
};

export default ProductFilterSectionSorting;
