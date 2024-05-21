import {
  AnyPgColumn,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  parentId: integer("parent_id").references((): AnyPgColumn => categories.id),
  name: varchar("name").notNull(),
  longName: varchar("longName").notNull(),
  description: varchar("description").notNull(),
  img: varchar("img"),
  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
});

export type CategoryType = typeof categories.$inferSelect;
