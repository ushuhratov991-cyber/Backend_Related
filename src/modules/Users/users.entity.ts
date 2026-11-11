export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface UserRepositoryData {
  findByEmail: (email: string) => Promise<User | undefined>;
  create: (email: string, password: string) => Promise<User>;
  deleteUser: (id: string) => Promise<User | undefined>;
}
