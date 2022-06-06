import { User } from "src/schemas/User";
import { injectable } from "tsyringe";

@injectable()
class GetAllUsersService {

  async execute(): Promise<User[]> {
    return await User.find().exec()
  }
}

export { GetAllUsersService };
