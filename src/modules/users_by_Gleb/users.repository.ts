import { eq } from "drizzle-orm";

import { db } from "../../db";
import { User, UsersRepository } from "./users.entity";
import { users } from "../../db/schema/users";

class DrizzleUserRepository implements UsersRepository {
  async createUser(email: string, password: string): Promise<User> {
    const [user] = await db
      .insert(users)
      .values({ email, password })
      .returning();

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const [user] = await db.select().from(users).where(eq(users.email, email));

    // return user ?? null
    return user;
  }
}

export { DrizzleUserRepository };
