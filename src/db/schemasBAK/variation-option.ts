import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { productConfigurations } from "./product-configurations";

export const variationOptions = mysqlTable("variationOptions", {
  id: serial("id").primaryKey(),
  variationId: int("variationId"),
  value: varchar("value", { length: 100 }).notNull(),
});

//👇 This code block will tell Drizzle that productConfigurations & variationOption are related!
export const variationOptionRelations = relations(
  variationOptions,
  ({ many }) => ({
    productConfigurations: many(productConfigurations),
  }),
);

export type VariationOptionsType = typeof variationOptions.$inferSelect;
