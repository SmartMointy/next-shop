"use server";

import { db } from "@/db/db";
import { categories } from "@/db/schemas/categories";

export type AddCategoryResponseType = { message: "success" | "error" | null };

export async function addCategory(
  currentState: { message: string },
  data: FormData,
) {
  const name = String(data.get("category-name"));
  const longName = data.get("category-long-name");
  const parentId = data.get("category-parent-id");
  const description = data.get("category-description");
  const img = data.get("category-img");
  console.warn(parentId);
  try {
    await db.insert(categories).values({
      name,
      description,
      longName,
      img,
      parentId: parentId === "-1" ? null : parentId,
    });
  } catch (e) {
    console.log(e);
    return { message: "error" };
  }

  return {
    message: "success",
  };
}
