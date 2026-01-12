import Reservation from "../../models/reservation.model";
import { FilterQuery } from "mongoose";
import { IReservation } from "../../interfaces/reservation.interface";

// Create a new reservation
export const createReservation = async (data: Partial<IReservation>) => {
  const reservation = await Reservation.create(data);
  return reservation.toObject ? reservation.toObject() : reservation;
};

// Get a reservation by ID
export const getReservationById = async (id: string) => {
  return Reservation.findById(id).lean<IReservation>().exec();
};

// Update a reservation by ID
export const updateReservation = async (id: string, update: Partial<IReservation>) => {
  return Reservation.findByIdAndUpdate(id, update, { new: true }).lean<IReservation>().exec();
};

// Delete a reservation by ID
export const deleteReservation = async (id: string) => {
  return Reservation.findByIdAndDelete(id).lean<IReservation>().exec();
};

// Get all reservations (with optional filters)
export const getAllReservations = async (filters: FilterQuery<IReservation> = {}) => {
  return Reservation.find(filters).lean<IReservation[]>().exec();
};

// Get reservations for a specific user
export const getReservationsByUser = async (userId: string) => {
  return Reservation.find({ user: userId }).lean<IReservation[]>().exec();
};

// Cancel a reservation (soft delete or status update)
export const cancelReservation = async (id: string) => {
  return Reservation.findByIdAndUpdate(
    id,
    { status: "CANCELLED" },
    { new: true }
  ).lean<IReservation>().exec();
};