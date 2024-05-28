import { faker } from "@faker-js/faker";
import { getTranslations } from "next-intl/server";
import { auth } from "../api/[...nextauth]/auth";
import Container from "@/components/container";
import { getCategories } from "@/services/categories";
import Image from "next/image";
import { db } from "@/db/db";
import { products } from "@/db/schemas/products";
import { productItems } from "@/db/schemas/product-items";

import MoneySVG from "@/assets/icons/iconify/money.svg";
import LockSVG from "@/assets/icons/iconify/lock.svg";
import ShippingSVG from "@/assets/icons/iconify/shipping.svg";
import SmileySVG from "@/assets/icons/iconify/smiley.svg";
import WorldSVG from "@/assets/icons/iconify/world.svg";
import Slogan from "./Slogan";
import { Link } from "@/navigation";

const brands = [
  {
    name: "Adidas",
    img: "brands/adidas.svg",
  },
  {
    name: "Nike",
    img: "brands/nike.svg",
  },
  {
    name: "Tom Tailor",
    img: "brands/tom_tailor.svg",
  },
  {
    name: "Tommy Hilfiger",
    img: "brands/tommy_hilfiger.svg",
  },
  {
    name: "Hugo Boss",
    img: "brands/hugo_boss.svg",
  },
  {
    name: "Ralph Lauren",
    img: "brands/ralph_lauren.svg",
  },
  {
    name: "Puma",
    img: "brands/puma.svg",
  },
];

const Brands = () => {
  return (
    <>
      {brands.map((brand, i) => (
        <div
          key={"0" + brand.name}
          className="relative flex h-28 w-40 flex-shrink-0 items-center justify-center"
        >
          <Image
            className="cursor-pointer object-contain transition-transform hover:scale-105"
            src={"/images/" + brand.img}
            alt={`Brand ${brand.name} logo`}
            fill={true}
          />
        </div>
      ))}
    </>
  );
};

// Since categories are dynamic, you would also save the translations
// in the database or use any service for translations.
// I dont do that to keep it simple
export default async function Home() {
  const categories = await getCategories("");
  const t = await getTranslations("home");
  const session = await auth();
  console.log(categories);

  console.log(session ? "Logged in!" : "Not logged in!");

  async function addProduct() {
    "use server";

    const myProducts = await db.select().from(products);

    await Promise.all(
      myProducts.map((product) => {
        const color = "Green";
        const size = "XXL";
        const productItemImg = product.name
          .concat(`-${size}-${color.at(0)}`)
          .concat(".jpeg")
          .toLowerCase()
          .replaceAll(" ", "-");
        const productSku =
          `${faker.string.nanoid(10)}${size}${color.at(0)}`.toUpperCase();

        return db.insert(productItems).values({
          productId: product.id,
          quantity: 50,
          img: productItemImg,
          color,
          size,
          price: String(30 + product.id * 2),
          sku: productSku,
        });
      }),
    );

    /*
    await db.insert(products).values({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      image: faker.commerce
        .productName()
        .toLowerCase()
        .replaceAll(" ", "-")
        .concat(".jpeg"),
      used: false,
      categoryId: 1,
    });*/
  }

  return (
    <>
      <Container>
        <div className="mt-20">
          <Slogan
            slogans={[
              t("slogan.one"),
              t("slogan.two"),
              t("slogan.three"),
              t("slogan.four"),
              t("slogan.five"),
            ]}
          />
        </div>

        <div className="mt-20 flex flex-wrap gap-12">
          {categories.map((category) => (
            <Link
              href={"/categories/" + category.name}
              className="group flex-1 ring-gold-400 focus:ring-2"
            >
              <div
                key={category.id}
                className="relative h-[500px] w-full min-w-52 flex-1 cursor-pointer overflow-hidden rounded text-stone-700 shadow-gold-800 transition-all hover:scale-105 hover:text-gold-700 group-focus:scale-105 group-focus:text-gold-700"
              >
                <div className="absolute left-0 top-0 z-10 p-4">
                  <h3 className="text-3xl font-black">
                    {t(`categories.${category.name}` as any)}
                  </h3>
                </div>
                <Image
                  className="object-cover"
                  src={"/images/categories/" + category.img}
                  alt={`Category ${category.name} preview`}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-xl font-semibold">
            Bei uns findest du alle TOP Marken
          </h2>

          <div className="relative mt-16 overflow-hidden">
            <div className="absolute right-0 z-10 h-full w-14 bg-gradient-to-l from-white to-transparent" />
            <div className="absolute left-0 z-10 h-full w-14 bg-gradient-to-r from-white to-transparent" />
            <div
              className="flex gap-12"
              style={{
                animation: "scroll 40s linear infinite",
                width: `${(160 + 48) * brands.length * 2}px`,
              }}
            >
              <Brands />
              <Brands />
            </div>
          </div>
        </div>
      </Container>

      {/*
       <div
        className="mt-20 py-20 text-amber-950"
        style={{
          background: "linear-gradient(to right, #ffc743, #ca8c00)",
        }}
      >
        <Container>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-lg font-medium uppercase">
                Jetzt einkaufen und sparen
              </p>
              <p className="mb-4 mt-2 text-4xl font-black uppercase text-stone-800">
                30% - 50% <span className="text-red-600"> Rabatt</span>
              </p>

              <p className="text-sm font-medium">Nur für kurze Zeit!</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-52 w-48">
                <Image
                  className="object-contain"
                  alt=""
                  src={"/images/sale/one.png"}
                  fill={true}
                />
              </div>

              <div className="relative h-52 w-48">
                <Image
                  className="object-contain"
                  alt=""
                  src={"/images/sale/two.png"}
                  fill={true}
                />
              </div>

              <div className="relative h-52 w-48">
                <Image
                  className="object-contain"
                  alt=""
                  src={"/images/sale/three.png"}
                  fill={true}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
 */}

      <Container>
        <div className="mt-20">
          <h2 className="text-xl font-semibold">Deine Vorteile bei uns:</h2>

          <div className="mt-14 grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5">
            <div className="rounded bg-gold-50 p-8">
              <div className="">
                <SmileySVG
                  fill="#FFF"
                  width={"24px"}
                  height={"24px"}
                  viewBox="0 0 20 20"
                />
              </div>

              <h3 className="mb-2 mt-4 font-semibold">Customer Care</h3>
              <p className="text-sm">
                Our customer care is available 24/7 at +999-999-999 and
                cc@example.com
              </p>
            </div>

            <div className="rounded bg-gold-50 p-8">
              <div className="">
                <LockSVG
                  fill="#FFF"
                  width={"24px"}
                  height={"24px"}
                  viewBox="0 0 18 20"
                />
              </div>

              <h3 className="mb-2 mt-4 font-semibold">Secure Payment</h3>
              <p className="text-sm">
                Transaction process has industry-leading end to end encryption
              </p>
            </div>

            <div className="rounded bg-gold-50 p-8">
              <div className="">
                <ShippingSVG
                  fill="#FFF"
                  width={"24px"}
                  height={"24px"}
                  viewBox="0 0 20 16"
                />
              </div>

              <h3 className="mb-2 mt-4 font-semibold">
                Free Worldwide Shipping
              </h3>
              <p className="text-sm">
                Free shipping all over the world on orders above $50
              </p>
            </div>

            <div className="rounded bg-gold-50 p-8">
              <div className="">
                <WorldSVG
                  fill="#FFF"
                  width={"24px"}
                  height={"24px"}
                  viewBox="0 0 20 20"
                />
              </div>

              <h3 className="mb-2 mt-4 font-semibold">
                Environmental Friendly
              </h3>
              <p className="text-sm">
                Our customer care is available 24/7 at +999-999-999 and
                cc@example.com
              </p>
            </div>

            <div className="rounded bg-gold-50 p-8">
              <div className="">
                <MoneySVG
                  fill="#FFF"
                  width={"24px"}
                  height={"24px"}
                  viewBox="0 0 20 20"
                />
              </div>

              <h3 className="mb-2 mt-4 font-semibold">Money Back Guarantee</h3>
              <p className="text-sm">
                You can return the product within 30 days.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-20 flex items-center md:h-52">
          <div className="h-full w-2 flex-shrink-0 rounded bg-gold-500"></div>

          <div className="flex w-full flex-wrap items-center justify-between gap-8 md:flex-nowrap md:gap-0">
            <div className="w-full md:px-12 lg:px-16">
              <p className="text-lg font-medium uppercase">
                Jetzt einkaufen und sparen
              </p>
              <p className="mb-4 mt-2 text-4xl font-black uppercase text-stone-800">
                30% - 50% <span className="text-rose-600"> Rabatt</span>
              </p>

              <p className="text-sm font-medium">Nur für kurze Zeit!</p>
            </div>

            <div className="flex w-full min-w-0 justify-between gap-4">
              <div className="relative h-52 w-48">
                <Image
                  className="object-contain"
                  alt=""
                  src={"/images/sale/one.png"}
                  fill={true}
                />
              </div>

              <div className="relative h-52 w-48">
                <Image
                  className="object-contain"
                  alt=""
                  src={"/images/sale/two.png"}
                  fill={true}
                />
              </div>

              <div className="relative h-52 w-48">
                <Image
                  className="object-contain"
                  alt=""
                  src={"/images/sale/three.png"}
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-20 text-center">
          <h4 className="text-4xl">Auf der Seite der Umwelt 🍃</h4>
        </div>
        <div className="relative mt-16 overflow-hidden rounded-lg bg-black text-white">
          <div className="relative z-10 p-14 md:w-2/3">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Aus alt mach neu!</h2>
              <p className="mt-3 text-stone-50 shadow-black [text-shadow:_0_1px_0_var(--tw-shadow-color)] md:text-stone-200 ">
                In den letzten Jahrzenten hat sich die Kleiderproduktion mehr
                als verdoppelt - darunter leidet vorallem die Umwelt! Deshalb
                kannst du bei uns auch gebrauchte Kleiderstücke kaufen, die noch
                vollkommen gut sind.
              </p>
            </div>

            <button className="h-12 w-full rounded-md bg-gold-500 px-4 text-sm font-medium text-stone-950 outline-none ring-gold-800 hover:opacity-95 focus:ring-2 md:w-auto">
              Zu den Produkten
            </button>
          </div>

          <div className="absolute right-0 top-0 z-0 h-full w-full md:w-1/2 ">
            <div className="absolute z-10 h-full w-full bg-black bg-opacity-30 bg-gradient-to-r from-black md:bg-transparent"></div>
            <Image
              className="right-0 object-cover"
              alt=""
              src={"/images/sale/mountains.png"}
              fill={true}
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-20"></div>
      </Container>

      <form action={addProduct}>
        <button type="submit"> Add Product</button>
      </form>
    </>
  );
}
