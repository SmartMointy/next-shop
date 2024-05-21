import {
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { countries } from "./countries";
import { relations } from "drizzle-orm";

export const addresses = mysqlTable("addresses", {
  id: serial("id").primaryKey(),

  streetName: varchar("streetName", { length: 200 }),
  unitNumber: varchar("unitNumber", { length: 200 }),
  city: varchar("city", { length: 200 }),
  postalCode: varchar("streetName", { length: 10 }),
  countryId: int("countryId"),

  createdAt: timestamp("createdAt").defaultNow(),
  modifiedAt: timestamp("modifiedAt").defaultNow(),
});

//👇 This code block defines which columns in the two tables are related
export const addressesRelations = relations(addresses, ({ one }) => ({
  country: one(countries, {
    fields: [addresses.countryId],
    references: [countries.id],
  }),
}));

export type AddressType = typeof addresses.$inferSelect;
