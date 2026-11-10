import {
  pgTable,
  boolean,
  varchar,
  integer,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 500 }).notNull(),
  author: varchar({ length: 100 }).notNull(),
  pages: integer().notNull(),
  isRead: boolean().notNull().default(false),
  createdAt: timestamp().notNull().defaultNow(),
});
