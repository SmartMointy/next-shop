import { relations } from "drizzle-orm";
import { cartItems } from "./cart-items";

import {
  decimal,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { products } from "./products";

export const productItems = pgTable("product_items", {
  id: serial("id").primaryKey().notNull(),
  productId: integer("productId")
    .notNull()
    .references(() => products.id),
  sku: varchar("sku").notNull(),
  img: varchar("img").notNull(),
  color: varchar("color").notNull(),
  size: varchar("size").notNull(),
  quantity: integer("quantity").default(0).notNull(),
  price: decimal("price", { precision: 4, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
});

export type ProductItemsType = typeof productItems.$inferSelect;
