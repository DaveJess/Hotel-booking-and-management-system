import { Types } from 'mongoose';

export interface IUser {
	_id?: Types.ObjectId | string;
	email: string;
	password: string;
	name: string;
	role: 'USER' | 'ADMIN' | 'SUPER_ADMIN' | 'HOTEL';
	isVerified?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}
