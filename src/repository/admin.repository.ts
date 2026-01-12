import Admin from '../models/admin.model';
import { IAdmin } from '../interfaces/admin.interface';

export default class AdminRepository {
	async createAdmin(data: IAdmin): Promise<IAdmin> {
		const admin = await Admin.create(data);
		const obj = admin.toObject ? admin.toObject() : admin;
		return {
			_id: obj._id,
			email: obj.email,
			password: obj.password,
			name: obj.name,
			role: obj.role,
			createdAt: obj.createdAt,
			updatedAt: obj.updatedAt
		} as IAdmin;
	}

	async getAdminById(id: string): Promise<IAdmin | null> {
		return Admin.findById(id).lean<IAdmin>().exec();
	}

	async getAdminByEmail(email: string): Promise<IAdmin | null> {
		return Admin.findOne({ email }).lean<IAdmin>().exec();
	}

	async updateAdmin(id: string, update: Partial<IAdmin>): Promise<IAdmin | null> {
		return Admin.findByIdAndUpdate(id, update, { new: true }).lean<IAdmin>().exec();
	}

	async deleteAdmin(id: string): Promise<IAdmin | null> {
		return Admin.findByIdAndDelete(id).lean<IAdmin>().exec();
	}

	async getAllAdmins(filter: Record<string, any> = {}): Promise<IAdmin[]> {
		return Admin.find(filter).lean<IAdmin[]>().exec();
	}
}
