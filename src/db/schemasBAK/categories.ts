import { relations } from "drizzle-orm";
import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { variation } from "./variation";

export const categories = mysqlTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 40 }).notNull(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  variations: many(variation),
}));

// TODO: remove
export const product_categories = mysqlTable("product_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 40 }),
});
