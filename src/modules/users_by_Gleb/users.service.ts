import { comparePassword, hashPassword } from "../../utils/hash";
import { signedToken } from "../../utils/jwt";
import { UsersRepository, User } from "./users.entity";

class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async registerUser(email: string, password: string) {
    if (!email || !password) {
      throw new Error("Email and password required");
    }

    const isUserExist: User | null = await this.repository.findByEmail(email);

    if (isUserExist) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(password);

    const user = await this.repository.createUser(email, hashedPassword);

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email");
    }

    // В user.password будет лежать hash пароля, а в password незахешированный пароль, если они соответствуют то нам вернется trues
    const isPasswrodVaild = await comparePassword(password, user.password);

    if (!isPasswrodVaild) {
      throw new Error("Invalid password");
    }

    const token = signedToken({ userId: user.id });
    console.log(token);

    return { user, token };
  }
}

export default UsersService;