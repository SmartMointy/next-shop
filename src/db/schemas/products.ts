import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { categories } from "./categories";
import { db } from "../db";

export const products = pgTable("products", {
  id: serial("id").primaryKey().notNull(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id),
  name: varchar("name", { length: 200 }).notNull(),
  description: varchar("description", { length: 1024 }).notNull(),
  image: varchar("image", { length: 200 }).notNull(),
  used: boolean("state").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  modifiedAt: timestamp("modified_at").notNull().defaultNow(),
});

export type ProductsType = typeof products.$inferSelect;
