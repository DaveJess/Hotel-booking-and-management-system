import { User } from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

class UserRepository {
  async createUser(data: IUser): Promise<IUser> {
    const user = await User.create(data);
    return user.toObject() as IUser;
  }

  async getUserById(id: string): Promise<IUser | null> {
    return (User as any).findById(id).lean().exec();
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return (User as any).findOne({ email }).lean().exec();
  }

  async updateUser(
    id: string,
    update: Partial<IUser>
  ): Promise<IUser | null> {
    return (User as any).findByIdAndUpdate(id, update, {
      new: true,
    })
      .lean()
      .exec();
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return (User as any).findByIdAndDelete(id).lean().exec();
  }

  async getAllUsers(filter: Record<string, any> = {}): Promise<IUser[]> {
    return (User as any).find(filter).lean().exec();
  }
}

export default new UserRepository();