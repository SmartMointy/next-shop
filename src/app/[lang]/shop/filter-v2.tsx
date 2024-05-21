import Divider from "./_components/_filter/product-filter-divider";
import ProductFilterSectionCategory from "./_components/_filter/product-filter-section-category";
import ProductFilterSectionColor from "./_components/_filter/product-filter-section-color";
import ProductFilterSectionPrice from "./_components/_filter/product-filter-section-price";
import ProductFilterSectionSize from "./_components/_filter/product-filter-section-size";
import ProductFilterSectionSorting from "./_components/_filter/product-filter-section-sorting";
import ProductFilterSectionState from "./_components/_filter/product-filter-section-state";
import ProductFilterSectionType from "./_components/_filter/product-filter-section-type";
import filterProducts from "./actions";

export default function FilterV2() {
  return (
    <div className="sticky top-[100px] flex h-[calc(100vh-100px)] w-72 flex-shrink-0 flex-col overflow-scroll py-6">
      <p className=" pb-3 text-lg font-semibold">Filtern nach</p>

      <form
        action={filterProducts}
        className="relative overflow-y-scroll ring-blue-500"
      >
        <div className="absolute z-30 h-[2px] w-full bg-white"></div>
        <div className="sticky top-0 z-20 h-[2px] w-full bg-stone-400"></div>
        <div className="sticky top-0 z-10 h-1 w-full bg-white"></div>

        <div className="h-4"></div>
        <ProductFilterSectionState />
        <Divider />

        <ProductFilterSectionSorting />
        <Divider />

        <ProductFilterSectionType />
        <Divider />

        <ProductFilterSectionCategory />
        <Divider />

        <ProductFilterSectionPrice />
        <Divider />

        <ProductFilterSectionSize />
        <Divider />

        <ProductFilterSectionColor />
      </form>
    </div>
  );
}
