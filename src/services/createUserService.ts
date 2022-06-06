import { User } from 'src/schemas/User'
import { injectable } from 'tsyringe'

// import { Request, Response } from "express";
interface CreateUserDTO {
  name: string
  email: string
  password?: string
  avatar?: string
  socketId: string
}

@injectable()
class CreateUserService {
  async excute ({
    name,
    email,
    password,
    avatar,
    socketId
  }: CreateUserDTO): Promise<User> {
    const userAlreadyExist = await User.findOne({ email }).exec()

    if (userAlreadyExist) {
      const user = await User.findByIdAndUpdate(
        {
          _id: userAlreadyExist._id
        },
        {
          $set: {
            socketId,
            avatar,
            password,
            name
          }
        },
        { new: true }
      ).exec()
      return user
    } else {
      const user = await User.create({
        name,
        email,
        password,
        avatar,
        socketId
      })

      return user
    }
  }
}

export { CreateUserService }
