import { relations } from "drizzle-orm";
import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { addresses } from "./addresses";

export const countries = mysqlTable("countries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
});

//👇 This code block will tell Drizzle that addresses & countries are related!
export const countriesRelations = relations(countries, ({ many }) => ({
  countries: many(addresses),
}));

export type CountryType = typeof countries.$inferSelect;
