import { pgTable } from "drizzle-orm/pg-core";
import {
  boolean,
  PgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { title } from "node:process";

export const todos = pgTable("todos", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 500 }).notNull(),
  done: boolean().notNull().default(false),
  createdAt: timestamp().notNull().defaultNow(),
});
