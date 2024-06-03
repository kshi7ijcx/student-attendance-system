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

export const attendance = pgTable("attendance", {
  id: serial("id").primaryKey(),
  studentId: integer("studentId", { length: 11 }).notNull(),
  present: boolean("present").default("false"),
  day: integer("day", { length: 11 }).notNull(),
  date: varchar("date", { length: 20 }).notNull(),
});
