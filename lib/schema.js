import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const grades = pgTable("grades", {
  id: integer("id").primaryKey(),
  grade: varchar("grade", { length: 10 }).notNull(),
});

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 20 }).notNull(),
  grade: varchar("grade", { length: 10 }).notNull(),
  address: varchar("address", { length: 50 }).notNull(),
  contact: varchar("contact", { length: 11 }).notNull(),
});
