import { Reservation } from "../../models/reservation.model";
import { IReservation } from "../../interfaces/reservation.interface";

// Create a new reservation
export const createReservation = async (data: Partial<IReservation>) => {
  const reservation = await Reservation.create(data);
  return reservation.toObject ? reservation.toObject() : reservation;
};

// Get a reservation by ID
export const getReservationById = async (id: string) => {
  return (Reservation as any).findById(id).lean().exec();
};

// Update a reservation by ID
export const updateReservation = async (id: string, update: Partial<IReservation>) => {
  return (Reservation as any).findByIdAndUpdate(id, update, { new: true }).lean().exec();
};

// Delete a reservation by ID
export const deleteReservation = async (id: string) => {
  return (Reservation as any).findByIdAndDelete(id).lean().exec();
};

// Get all reservations (with optional filters)
export const getAllReservations = async (filters: any = {}) => {
  return (Reservation as any).find(filters).lean().exec();
};

// Get reservations for a specific user
export const getReservationsByUser = async (userId: string) => {
  return (Reservation as any).find({ user: userId }).lean().exec();
};

// Cancel a reservation (soft delete or status update)
export const cancelReservation = async (id: string) => {
  // If you use a status field for cancellation, update it here
  return (Reservation as any).findByIdAndUpdate(
    id,
    { status: "CANCELLED" },
    { new: true }
  ).lean().exec();
};