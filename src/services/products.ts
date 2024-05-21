import { db } from "@/db/db";
import { products } from "@/db/schemas/products";
import "server-only";

export async function addProduct() {}
export async function getAllProducts() {
  return await db.select().from(products).limit(10);
}
