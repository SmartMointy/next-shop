"use server";

import { redirect } from "next/navigation";

const defaultMinPrice = 0;
const defaultMaxPrice = 80;

// TODO: intl doesnt work
// TODO: refactor
// TODO: missing types
export default async function filterProducts(formData: FormData) {
  console.log(formData);
  const priceRange = formData.getAll("price[]") ?? [];

  const state = formData.getAll("state") ?? [];
  const categories = formData.getAll("category") ?? [];
  const types = formData.getAll("type") ?? [];
  const colors = formData.getAll("color") ?? [];
  const minPrice = (priceRange[0] ?? defaultMinPrice).toString();
  const maxPrice = (priceRange[1] ?? defaultMaxPrice).toString();
  const sizes = formData.getAll("size") ?? [];
  const sortBy = formData.get("sort_by")?.toString() ?? "popularity";

  const searchParams = new URLSearchParams();

  if (sortBy !== "popularity") {
    searchParams.set("sort_by", sortBy.toString());
  }

  if (categories.length > 0) {
    searchParams.set("categories", categories.toString());
  }

  if (types.length > 0) {
    searchParams.set("types", types.toString());
  }

  if (colors.length > 0) {
    searchParams.set("colors", colors.toString());
  }

  if (minPrice !== defaultMinPrice.toString()) {
    searchParams.set("min_price", minPrice);
  }

  if (maxPrice !== defaultMaxPrice.toString()) {
    searchParams.set("max_price", maxPrice);
  }

  if (sizes.length > 0) {
    searchParams.set("sizes", sizes.toString());
  }

  redirect("/de/shop?" + searchParams.toString());
}
