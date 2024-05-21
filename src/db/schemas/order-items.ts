import {
  AnyPgColumn,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { productItems } from "./product-items";

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("parent_id").references(() => orders.id),
  productItemId: integer("product_item_id").references(() => productItems.id),
  quantity: integer("quantity").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
});
