import Container from "@/components/container";
import { Suspense } from "react";
import FilterSection from "./_components/filter-section";
import ProductsSection from "./_components/products-section";

export default async function ShopPageWithCategory({
  params,
  searchParams,
}: {
  params: { category: string[] };
  searchParams: any;
}) {
  return (
    <>
      <Container className="mt-10">
        <p className="text-sm font-medium">
          {params.category.map((category, i) => (
            <>
              <span key={category}>{category}</span>
              {i < params.category.length - 1 ? " / " : ""}
            </>
          ))}
        </p>

        <h1 className="mb-2 mt-6 text-3xl font-semibold">
          Crazy Big Header For Winter
        </h1>
        <p>
          Rando description lorem ipsum dolor sit amet, dir tid makun mir sun.
        </p>
      </Container>

      <Container className="">
        <div className="relative my-8 flex gap-14">
          {/** Filter */}
          {/** Make Filter title stay visible even on scroll */}
          <FilterSection />
          {/** Main */}
          <Suspense
            key={JSON.stringify(searchParams)}
            fallback={<ProductsSection.Skeleton />}
          >
            <ProductsSection minPrice={searchParams["min_price"]} />
          </Suspense>
        </div>
      </Container>
    </>
  );
}
