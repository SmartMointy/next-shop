import { productItems } from "./product-items";
import { char, integer, pgTable, serial } from "drizzle-orm/pg-core";

export const cartItems = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  productItemId: integer("product_Item_id").references(() => productItems.id),
  userId: char("userId", { length: 40 }).notNull(),
  count: integer("count").notNull(),
});

export type CartItemType = typeof cartItems.$inferSelect;
