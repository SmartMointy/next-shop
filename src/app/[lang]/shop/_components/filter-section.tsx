import { getTranslations } from "next-intl/server";
import FilterForm from "./_filter/filter-form";

export default async function FilterSection() {
  const t = await getTranslations("shop.filter.type");

  return (
    <div className="flex w-72 flex-shrink-0 flex-col px-4 py-6">
      <p className=" pb-3 text-lg font-semibold">Filtern nach</p>
      <FilterForm productTypes={[]} />
    </div>
  );
}
