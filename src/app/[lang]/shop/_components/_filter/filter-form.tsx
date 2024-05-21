"use client";

import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import filterProducts from "../../actions";
import SubmitButton from "./SubmitButton";
import Divider from "./product-filter-divider";
import ProductFilterSectionCategory from "./product-filter-section-category";
import ProductFilterSectionColor from "./product-filter-section-color";
import ProductFilterSectionPrice from "./product-filter-section-price";
import ProductFilterSectionSize from "./product-filter-section-size";
import ProductFilterSectionSorting from "./product-filter-section-sorting";
import ProductFilterSectionState from "./product-filter-section-state";
import ProductFilterSectionType from "./product-filter-section-type";

export default function FilterForm({ productTypes }: any) {
  const searchParams = useSearchParams();
  const [formHasChanged, setFormHasChanged] = useState(false);

  const onFormChange = (event: ChangeEvent<HTMLFormElement>) => {
    setFormHasChanged(true);
  };

  const onFormSubmit = () => {
    setFormHasChanged(false);
  };

  return (
    <form
      action={filterProducts}
      className="relative ring-blue-500"
      onChange={onFormChange}
      onSubmit={onFormSubmit}
    >
      <div className="absolute z-30 h-[2px] w-full bg-white"></div>
      <div className="sticky top-0 z-20 h-[2px] w-full bg-stone-400"></div>
      <div className="sticky top-0 z-10 h-1 w-full bg-white"></div>

      <div className="h-4"></div>
      <ProductFilterSectionState />
      <Divider />

      <ProductFilterSectionSorting initialValue={searchParams.get("sort_by")} />
      <Divider />

      <ProductFilterSectionType productTypes={productTypes} />
      <Divider />

      <ProductFilterSectionCategory />
      <Divider />

      <ProductFilterSectionPrice />
      <Divider />

      <ProductFilterSectionSize />
      <Divider />

      <ProductFilterSectionColor />

      <SubmitButton hasFormChanged={formHasChanged} />
    </form>
  );
}
