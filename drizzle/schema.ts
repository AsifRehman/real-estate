import { relations, sql } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  integer,
  primaryKey,
  bigint,
  pgEnum,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email"),
  image: text("image"),
  role: text("role").$type<"admin" | "company" | "user">().default("user"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const STATUS_ENUM = pgEnum("transactionType", [
  "Sale",
  "Rent",
  "Airbnb",
]);

export const properties = pgTable("properties", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  Thumbnail: text("Thumbnail").notNull(),
  images: text("images")
    .array()
    .default(sql`ARRAY[]::text[]`),
  location: text("location").notNull(),
  description: text("description").notNull(),
  price: bigint("price", { mode: "number" }).notNull(),
  rooms: bigint("rooms", { mode: "number" }).notNull(),
  bathroom: bigint("bathroom", { mode: "number" }).notNull(),
  parking: bigint("parking", { mode: "number" }).notNull(),
  transactionType: STATUS_ENUM("transactionType").default("Sale"),
  size: text("size").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});
