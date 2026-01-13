import { IReservation } from '../interfaces/reservation.interface';
import { Reservation } from '../models/reservation.model';
import mongoose from 'mongoose';

export default class ReservationRepository {
  async createReservation(data: IReservation): Promise<IReservation> {
    const reservation = await Reservation.create(data);
    return reservation.toObject ? reservation.toObject() : reservation;
  }

  async getReservationById(id: string): Promise<IReservation | null> {
    return (Reservation as any).findById(id).lean().exec();
  }

  async getReservationsByUser(userId: string): Promise<IReservation[]> {
    return (Reservation as any).find({ userId: userId }).lean().exec();
  }

  async getReservationsByHotel(hotelId: string): Promise<IReservation[]> {
    return (Reservation as any).find({ hotel: hotelId }).lean().exec();
  }

  async updateReservation(
    id: string,
    update: Partial<IReservation>
  ): Promise<IReservation | null> {
    return (Reservation as any).findByIdAndUpdate(id, update, { new: true })
      .lean()
      .exec();
  }

  async deleteReservation(id: string): Promise<IReservation | null> {
    return (Reservation as any).findByIdAndDelete(id).lean().exec();
  }

  async getAllReservations(
    filter: any = {}
  ): Promise<IReservation[]> {
    return (Reservation as any).find(filter).lean().exec();
  }
}
