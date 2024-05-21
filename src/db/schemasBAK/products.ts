import {
  boolean,
  char,
  decimal,
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

// TODO: optimize like count, etc.
export const products = mysqlTable("products", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }),
  description: varchar("description", { length: 1024 }),
  image: varchar("image", { length: 200 }),
  product_type_id: int("product_type_id"),
  used: boolean("state"),
  creatorId: char("creatorId", { length: 40 }),
  price: decimal("price", { precision: 4, scale: 2 }),
  likes: int("likes").default(0),
  createdAt: timestamp("createdAt").defaultNow(),
  modifiedAt: timestamp("modifiedAt").defaultNow(),
});

export type ProductsType = typeof products.$inferSelect;
