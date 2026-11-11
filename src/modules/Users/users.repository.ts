import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../db/schema/users";
import { User, UserRepositoryData } from "./users.entity";

class DrizzleUserRepository implements UserRepositoryData {
  async findByEmail(email: string): Promise<User | undefined> {
    const [userByEmail] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    return userByEmail;
  }

  async create(email: string, password: string): Promise<User> {
    const newUser = { email, password };

    const [createByEmail] = await db.insert(users).values(newUser).returning();

    return createByEmail;
  }

  async deleteUser(id: string): Promise<User | undefined> {
    const [deleById] = await db
      .delete(users)
      .where(eq(users.id, id))
      .returning();

    return deleById;
  }
}

export { DrizzleUserRepository };
