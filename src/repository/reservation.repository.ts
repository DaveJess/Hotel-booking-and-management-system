import { IReservation } from '../interfaces/reservation.interface';
import { Reservation } from '../models/reservation.model';
import mongoose from 'mongoose';
import { FilterQuery } from 'mongoose';

export default class ReservationRepository {
  async createReservation(data: IReservation): Promise<IReservation> {
    const reservation = await Reservation.create(data);
    return reservation.toObject ? reservation.toObject() : reservation;
  }

  async getReservationById(id: string): Promise<IReservation | null> {
    return Reservation.findById(id).lean().exec();
  }

  async getReservationsByUser(userId: string): Promise<IReservation[]> {
    return Reservation.find({ userId: userId }).lean().exec();
  }

  async getReservationsByHotel(hotelId: string): Promise<IReservation[]> {
    return Reservation.find({ hotel: hotelId }).lean().exec();
  }

  async updateReservation(
    id: string,
    update: Partial<IReservation>
  ): Promise<IReservation | null> {
    return Reservation.findByIdAndUpdate(id, update, { new: true })
      .lean()
      .exec();
  }

  async deleteReservation(id: string): Promise<IReservation | null> {
    return Reservation.findByIdAndDelete(id).lean().exec();
  }

  async getAllReservations(
    filter: FilterQuery<IReservation> = {}
  ): Promise<IReservation[]> {
    return Reservation.find(filter).lean().exec();
  }
}
