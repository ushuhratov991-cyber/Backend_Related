export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface UserRepositoryData {
  findByEmail: (email: string) => Promise<User | null>;
  create: (email: string, password: string) => Promise<User>;
  deleteUser: (id: string) => Promise<User | undefined>;
}
