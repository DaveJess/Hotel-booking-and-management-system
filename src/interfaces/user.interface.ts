import { Types } from 'mongoose';
export type UserRole = "USER" | "HOTEL" | "ADMIN" | "SUPER_ADMIN";

export interface IUser {
	fullName: string;
  	_id?: Types.ObjectId | string;
  	email: string;
  	password: string;
  	identification: string;
	id_no: number;
	booking: string;

	// name: string;
  	role: "USER" | "ADMIN" | "SUPER_ADMIN" | "HOTEL";
  	
	isVerified?: boolean;
  	emailToken?: string;
  	
	createdAt?: Date;
  	updatedAt?: Date;
}
