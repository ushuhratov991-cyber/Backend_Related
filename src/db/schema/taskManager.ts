import {
  boolean,
  pgTable,
  varchar,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 100 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  done: boolean().notNull().default(false),
  createdAt: timestamp().notNull().defaultNow(),
});
