import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { categories } from "./categories";
import { relations } from "drizzle-orm";

export const variation = mysqlTable("variations", {
  id: serial("id").primaryKey(),
  categoryId: int("categoryId"),
  name: varchar("name", { length: 100 }).notNull(),
});

//👇 This code block defines which columns in the two tables are related
export const variationRelations = relations(variation, ({ one }) => ({
  category: one(categories, {
    fields: [variation.categoryId],
    references: [categories.id],
  }),
}));

export type VariationType = typeof variation.$inferSelect;
