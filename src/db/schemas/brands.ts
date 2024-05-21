import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 40 }).notNull(),
  img: varchar("img"),
  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
});
