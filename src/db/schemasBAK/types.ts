import {
  int,
  mysqlTable,
  primaryKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";

export const types = mysqlTable("types", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 40 }).notNull(),
});

export const product_type = mysqlTable(
  "product_type",
  {
    productId: int("productId"),
    typeId: int("typeId"),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.productId, table.typeId] }),
  }),
);
