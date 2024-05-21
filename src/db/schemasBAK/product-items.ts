import {
  AnyMySqlColumn,
  decimal,
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { cartItems } from "./cart-items";
import { productConfigurations } from "./product-configurations";

export const productItem = mysqlTable("productItems", {
  id: serial("id").primaryKey(),
  productItemId: int("productItemId").notNull(),
  quantity: int("quantity").notNull().default(0),
  productImage: varchar("productImage", { length: 200 }).notNull(),
  price: decimal("price", { precision: 4, scale: 2 }).notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  modifiedAt: timestamp("modifiedAt").notNull().defaultNow(),
});

//👇 This code block will tell Drizzle that productItem & cartItems are related!
export const productItemRelations = relations(productItem, ({ many }) => ({
  cartItems: many(cartItems),
}));

//👇 This code block will tell Drizzle that productItem & productConfigurations are related!
export const productConfigurationsRelations = relations(
  productItem,
  ({ many }) => ({
    productConfigurations: many(productConfigurations),
  }),
);

export type ProductItemType = typeof productItem.$inferSelect;
