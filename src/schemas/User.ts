import mongoose, { Document } from 'mongoose';

type User = Document & {
  name: string;
  email: string;
  avatar: string;
  socketId: string;
  password: string;
}
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  socketId: String,
  password: String
})

const User = mongoose.model<User>('Users', UserSchema)

export { User };
