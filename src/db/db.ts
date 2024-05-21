"server only";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// create the connection
const client = neon<boolean, boolean>(process.env.DATABASE_URL!);

export const db = drizzle(client);
