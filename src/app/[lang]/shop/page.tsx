import Container from "@/components/container";
import { Suspense } from "react";
import FilterSection from "./_components/filter-section";
import ProductsSection from "./_components/products-section";

export default async function Shop({ searchParams }: any) {
  return (
    <Container className="">
      <div className="relative my-8 flex px-4">
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
  );
}
