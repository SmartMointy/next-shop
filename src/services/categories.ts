import "server-only";
import { db } from "@/db/db";
import { CategoryType, categories } from "@/db/schemas/categories";
import { eq, isNull } from "drizzle-orm";
import { cache } from "react";

const getAllCategories = cache(async () => {
  return await db.select().from(categories);
});

const getMainCategories = cache(async () => {
  return await db.select().from(categories).where(isNull(categories.parentId));
});

const getAllSubCategories = cache(async (categoryId: number) => {
  return await db
    .select()
    .from(categories)
    .where(eq(categories.parentId, categoryId));
});

const updateCategoryName = cache(
  async (categoryId: number, newCategoryName: string) => {
    return await db
      .update(categories)
      .set({ name: newCategoryName, img: `categories/${newCategoryName}.jpg` })
      .where(eq(categories.id, categoryId));
  },
);

const addCategory = cache(async (name: string, parentId: number) => {
  return await db
    .insert(categories)
    .values({ name, img: `categories/${name}.png`, parentId });
});

type CategoriesList = CategoryType & { children: CategoryType[] };

function filterByParentId(
  myCategories: CategoryType[],
  parentId: number | null,
): CategoriesList[] {
  return myCategories
    .filter((category) => {
      return category.parentId === parentId;
    })
    .map((filteredItem) => {
      return {
        ...filteredItem,
        children: filterByParentId(myCategories, filteredItem.id),
      };
    });
}

const getCategories = cache(async (categoryName: string) => {
  const allCategories = await db.select().from(categories);
  const categoryId = allCategories.find(
    (category) => category.name === categoryName,
  )?.id;
  return filterByParentId(allCategories, categoryId || null);
});

export {
  getAllCategories,
  getMainCategories,
  getAllSubCategories,
  updateCategoryName,
  addCategory,
  getCategories,
};
