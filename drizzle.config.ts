import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.error(process.env.DATABASE_URL);
  throw new Error("Environment variable DATABASE_URL is missing");
}

export default defineConfig({
  schema: "./src/db/schemas/*",
  out: "./drizzle",
  dialect: "postgresql",
  strict: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
