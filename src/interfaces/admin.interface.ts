import { Types } from 'mongoose';

export interface IAdmin {
	_id?: Types.ObjectId | string;
	email: string;
	password: string;
	name: string;
	role: 'ADMIN' | 'SUPER_ADMIN';
	createdAt?: Date;
	updatedAt?: Date;
}
