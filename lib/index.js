import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const url = process.env.NEXT_PUBLIC_DBURL;
const db = drizzle(neon(url));
export default db;
