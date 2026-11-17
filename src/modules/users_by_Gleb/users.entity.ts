export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface UsersRepository {
  createUser(email: string, password: string): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
