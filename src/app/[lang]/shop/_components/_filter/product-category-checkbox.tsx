import simpleHash from "@/utils/simpleHash";

export default function ProductCategoryCheckbox({
  label,
  name,
  value,
}: {
  label: string;
  name?: string;
  value?: string;
}) {
  const uniqueId = simpleHash(label).toString();
  return (
    <label
      htmlFor={uniqueId}
      className="flex cursor-pointer items-center justify-between py-1 text-sm"
    >
      <span>{label}</span>
      <input
        type="checkbox"
        id={uniqueId}
        name={name}
        value={value}
        className="h-4 w-4 outline-amber-400"
      />
    </label>
  );
}
