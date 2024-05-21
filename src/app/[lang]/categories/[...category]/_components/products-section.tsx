import { db } from "@/db/db";
import { ProductsType, products } from "@/db/schemas/products";
import ProductCard from "./product-card";
import { getAllProducts } from "@/services/products";

const ProductsSection = async function ({ minPrice, shouldWait }: any) {
  //await wait(2000);
  const a = fetch("https://google.de");

  let myProducts: ProductsType[] = [];

  try {
    myProducts = await getAllProducts();
  } catch (err) {
    console.error(err);
  }

  return (
    <div className={`w-full`}>
      <div id="gg" className="h-1 w-1"></div>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] content-start justify-between gap-12 pt-16">
        {myProducts.map((myProduct) => (
          <ProductCard key={myProduct.id} data={myProduct} />
        ))}
      </div>
    </div>
  );
};

ProductsSection.Skeleton = function () {
  return (
    <div className="w-full">
      <div id="gg" className="h-1 w-1"></div>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] content-start justify-between gap-12 px-4 pt-16">
        {/* <ProductCard color={true} />
        <ProductCard color={true} />
        <ProductCard color={true} />
        <ProductCard color={true} />
        <ProductCard color={true} />
        <ProductCard color={true} /> */}
      </div>
    </div>
  );
};

export default ProductsSection;
