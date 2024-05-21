"use client";

import Input from "@/components/input";
import ProductCategoryCheckbox from "./product-category-checkbox";
import FilterLabel from "./product-filter-label";

const categories = [
  { label: "Kleidung2", value: "clothing" },
  { label: "Sportkleidung2", value: "sportclothing" },
  { label: "Besondere Kleidung2", value: "specialclothing" },
  { label: "Andere Kleidung2", value: "differentclothing" },
];

// Naiv implementation
const ProductFilterSectionCategory = function () {
  return (
    <>
      <FilterLabel label="Kategorien" />
      <Input name="category_search" type="text" placeholder="Suche" />

      <div className="mt-4 flex flex-col gap-1">
        {categories.map((category) => (
          <ProductCategoryCheckbox
            key={category.value}
            label={category.label}
            name="category"
            value={category.value}
          />
        ))}
      </div>
    </>
  );
};

ProductFilterSectionCategory.Skeleton = function () {
  return <p>TODO Skeleton</p>;
};

export default ProductFilterSectionCategory;
