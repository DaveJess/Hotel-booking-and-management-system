import { Types } from 'mongoose';

export interface IReservation {
	_id?: Types.ObjectId | string;
	user: Types.ObjectId | string;
	hotel: Types.ObjectId | string;
	room: Types.ObjectId | string;
	checkIn: Date;
	checkOut: Date;
	guests: number;
	status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
	totalPrice: number;
	createdAt?: Date;
	updatedAt?: Date;
}
