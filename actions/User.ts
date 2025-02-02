"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/drizzle";
import { accounts, users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

interface user {
  name: string;
  role?: "ADMIN" | "USER";
  image?: string;
  email?: string;
  userId?: string;
}

export const user = async (userId: string) => {
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.id, userId),
  });

  const account = await db.query.accounts.findFirst({
    where: (account, { eq }) => eq(account.userId, userId),
  });

  return { user, account };
};
