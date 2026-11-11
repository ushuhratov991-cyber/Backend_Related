import { User, UserRepositoryData } from "./users.entity";

class UsersService {
  constructor(private readonly repo: UserRepositoryData) {
    this.repo = repo;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    if (!email) {
      throw new Error("Email is empty or incorrect!");
    }

    return this.repo.findByEmail(email);
  }

  async create(email: string, password: string): Promise<User | undefined> {
    if (!email || !password) {
      throw new Error("Fields (email/password) are required");
    }

    return this.repo.create(email, password);
  }

  async deleteUser(id: string): Promise<User | undefined> {
    if (!id) {
      throw new Error("ID is required or incorrect");
    }

    return this.repo.deleteUser(id);
  }
}

export { UsersService };
