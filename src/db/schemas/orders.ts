import {
  AnyPgColumn,
  char,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { addresses } from "./addresses";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  addressId: integer("address_id").references(() => addresses.id),
  userId: char("userId", { length: 40 }).notNull(),
  status: varchar("status").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
});
