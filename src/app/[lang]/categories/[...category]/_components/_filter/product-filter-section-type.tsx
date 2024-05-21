import ProductCategoryCheckbox from "./product-category-checkbox";
import FilterLabel from "./product-filter-label";

const productTypes = [
  { label: "Kleidung", value: "clothing" },
  { label: "Sportkleidung", value: "sportclothing" },
  { label: "Besondere Kleidung", value: "specialclothing" },
  { label: "Andere Kleidung", value: "differentclothing" },
  { label: "Spielzeuge", value: "toys" },
];

// TODO: Intl
export default function ProductFilterSectionType({ productTypes }: any) {
  return (
    <>
      <FilterLabel label="Produkttyp" />

      <div className="flex flex-col gap-1">
        {productTypes.map((type: any) => (
          <ProductCategoryCheckbox
            key={type.label}
            name={"type"}
            label={type.label}
            value={type.value}
          />
        ))}
      </div>
    </>
  );
}
