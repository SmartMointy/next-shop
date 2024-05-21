import {
  char,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { productItems } from "./product-items";

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  productItemId: integer("product_item_id").references(() => productItems.id),
  userId: char("userId", { length: 40 }).notNull(),
  rating: integer("rating").notNull(),
  comment: varchar("comment", { length: 300 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
});
