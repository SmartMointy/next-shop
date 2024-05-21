import {
  AnyMySqlColumn,
  bigint,
  int,
  mysqlTable,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";
import { variationOptions } from "./variation-option";
import { productItem } from "./product-items";
import { relations } from "drizzle-orm";

// id is unnecessary in mysql, but requiered in PlanetScale
// See: https://planetscale.com/docs/reference/mysql-compatibility
export const productConfigurations = mysqlTable("productConfigurations", {
  id: serial("id"),
  productItemId: int("productItemId"),
  variationOptionId: int("variationOptionId"),
  value: varchar("value", { length: 100 }).notNull(),
});

//👇 This code block defines which columns in the two tables are related
export const productConfigurationsRelations = relations(
  productConfigurations,
  ({ one }) => ({
    variationOption: one(variationOptions, {
      fields: [productConfigurations.variationOptionId],
      references: [variationOptions.id],
    }),
    productItem: one(productItem, {
      fields: [productConfigurations.productItemId],
      references: [productItem.id],
    }),
  }),
);

export type ProductConfigurationsType =
  typeof productConfigurations.$inferSelect;
