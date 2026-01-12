import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';

export default class UserRepository {
	async createUser(data: IUser): Promise<IUser> {
		const user = await User.create(data);
		return user.toObject ? user.toObject() : user;
	}

	async getUserById(id: string): Promise<IUser | null> {
		return User.findById(id).lean<IUser>().exec();
	}

	async getUserByEmail(email: string): Promise<IUser | null> {
		return User.findOne({ email }).lean<IUser>().exec();
	}

	async updateUser(id: string, update: Partial<IUser>): Promise<IUser | null> {
		return User.findByIdAndUpdate(id, update, { new: true }).lean<IUser>().exec();
	}

	async deleteUser(id: string): Promise<IUser | null> {
		return User.findByIdAndDelete(id).lean<IUser>().exec();
	}

	async getAllUsers(filter: Record<string, any> = {}): Promise<IUser[]> {
		return User.find(filter).lean<IUser[]>().exec();
	}
}
