import { Request, Response } from "express";
import * as ReservationService from "../service/reservation/reservation.service";

// Create a new reservation
export const createReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await ReservationService.createReservation(req.body);
    res.status(201).json({ message: "Reservation created successfully", reservation });
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to create reservation" });
  }
};

// Get a reservation by ID
export const getReservationById = async (req: Request, res: Response) => {
  try {
    const reservation = await ReservationService.getReservationById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json(reservation);
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to fetch reservation" });
  }
};

// Update a reservation by ID
export const updateReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await ReservationService.updateReservation(req.params.id!, req.body);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json({ message: "Reservation updated successfully", reservation });
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to update reservation" });
  }
};

// Delete a reservation by ID
export const deleteReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await ReservationService.deleteReservation(req.params.id!);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to delete reservation" });
  }
};

// Get all reservations (with optional filters)
export const getAllReservations = async (req: Request, res: Response) => {
  try {
    const filters = req.query || {};
    const reservations = await ReservationService.getAllReservations(filters);
    res.json(reservations);
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to fetch reservations" });
  }
};

// Get reservations for a specific user
export const getReservationsByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const reservations = await ReservationService.getReservationsByUser(userId);
    res.json(reservations);
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to fetch user reservations" });
  }
};

// Cancel a reservation
export const cancelReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await ReservationService.cancelReservation(req.params.id!);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found or already cancelled" });
    }
    res.json({ message: "Reservation cancelled successfully", reservation });
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to cancel reservation" });
  }
};