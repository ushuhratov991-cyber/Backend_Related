import { eq } from "drizzle-orm";
import { db } from "../../db";
import { Users } from "../../db/schema/users";
import { User, UserRepositoryData } from "./users.entity";

class DrizzleUserRepository implements UserRepositoryData {
  async findByEmail(email: string): Promise<User | null> {
    const [userByEmail] = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email));

    return userByEmail;
  }

  async create(email: string, password: string): Promise<User> {
    const newUser = { email, password };

    const [createByEmail] = await db.insert(Users).values(newUser).returning();

    return createByEmail;
  }

  async deleteUser(id: string): Promise<User | undefined> {
    const [deleById] = await db
      .delete(Users)
      .where(eq(Users.id, id))
      .returning();

    return deleById;
  }
}

export { DrizzleUserRepository };
