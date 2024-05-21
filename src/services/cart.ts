import "server-only";
import { db } from "@/db/db";
import { cartItems } from "@/db/schemas/cart-items";
import { products } from "@/db/schemas/products";
import { eq } from "drizzle-orm";
import { productItems } from "@/db/schemas/product-items";

export type CartItem = {
  id: number;
  count: number;
  productName: string;
  price: string;
  productItemId: number;
  img: string;
  color: string;
  size: string;
};

export async function getCartItemsWithDetails() {
  return await db
    .select({
      id: cartItems.id,
      count: cartItems.count,
      productName: products.name,
      price: productItems.price,
      productItemId: productItems.id,
      img: productItems.img,
      color: productItems.color,
      size: productItems.size,
    })
    .from(cartItems)
    .leftJoin(productItems, eq(cartItems.productItemId, productItems.id))
    .leftJoin(products, eq(productItems.id, products.id));
}
