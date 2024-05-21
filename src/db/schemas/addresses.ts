import { char, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const addresses = pgTable("addresses", {
  id: serial("id").primaryKey(),
  userId: char("userId", { length: 40 }).notNull(),

  streetName: varchar("streetName", { length: 200 }),
  unitNumber: varchar("unitNumber", { length: 200 }),
  city: varchar("city", { length: 200 }),
  postalCode: varchar("streetName", { length: 10 }),
  country: varchar("country"),

  createdAt: timestamp("created_at").defaultNow(),
  modifiedAt: timestamp("modified_at").defaultNow(),
});

export type AddressType = typeof addresses.$inferSelect;
