import { getCategories } from "@/services/categories";

const Underbar = async ({ category: categoryName }: { category: string }) => {
  const categories = await getCategories(categoryName);

  return (
    <div className="sticky top-[70px] z-10 flex h-[30px] items-center justify-start gap-2 bg-[#fbfbfb] pl-3">
      <div className="flex items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5H15M3 7.5H15M3 10.5H15M3 13.5H15"
            stroke="#111827"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="ml-[6px]">Alle</p>
      </div>

      {categories.map((category) => (
        <>
          <p key={category.id}>{category.name}</p>
          {category.children.slice(0, 3).map((subCategory) => (
            <p key={subCategory.id}>{subCategory.name}</p>
          ))}
        </>
      ))}
    </div>
  );
};

export default Underbar;
