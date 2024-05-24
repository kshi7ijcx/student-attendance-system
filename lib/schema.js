import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const GRADES = pgTable("grades", {
  id: integer("id").primaryKey(),
  grade: varchar("grade", { length: 10 }).notNull(),
});

export const STUDENTS = mysqlTable("students", {
  id: integer("id").autoincrement().primaryKey(),
  name: integer("name", { length: 20 }).notNull(),
  grade: varchar("grade", { length: 10 }).notNull(),
  address: varchar("address", { length: 50 }).notNull(),
  contact: varchar("contact", { length: 11 }),
});
