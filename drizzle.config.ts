import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_HOST) {
  console.error(process.env.DATABASE_HOST);
  throw new Error("No connection details");
}

console.error(process.env.DATABASE_HOST);
export default defineConfig({
  schema: "./src/db/schemas/*",
  out: "./drizzle",
  driver: "pg",
  strict: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});
