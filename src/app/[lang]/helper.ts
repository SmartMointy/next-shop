import { db } from "@/db/db";
import { categories } from "@/db/schemas/categories";

export async function addCategory(name: string) {
  return await db
    .insert(categories)
    .values({ name, img: `categories/${name}.png` });
}
