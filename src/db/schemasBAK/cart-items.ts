import { relations } from "drizzle-orm";
import { char, int, mysqlTable, serial } from "drizzle-orm/mysql-core";
import { productItem } from "./product-items";

export const cartItems = mysqlTable("cartItems", {
  id: serial("id").primaryKey(),
  productItemId: int("productItemId"),
  userId: char("userId", { length: 40 }),
  count: int("count"),
});

//👇 This code block defines which columns in the two tables are related
export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  productItem: one(productItem, {
    fields: [cartItems.productItemId],
    references: [productItem.id],
  }),
}));

export type ShoppingCartType = typeof cartItems.$inferSelect;
