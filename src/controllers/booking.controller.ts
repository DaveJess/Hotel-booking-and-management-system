import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { Booking } from "../models/booking.model";
import { Room } from "../models/room.model";
import { isRoomAvailable } from "../service/booking/booking.service";
import * as BookingService from "../service/booking/booking.service";

export const createBooking = async (req: AuthRequest, res: Response) => {
  try {
    const booking = await BookingService.createBooking({
      ...req.body,
      user: req.user?._id || req.user?.id,
    });
    res.status(201).json(booking);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserBookings = async (req: AuthRequest, res: Response) => {
  const userId = req.user?._id || req.user?.id;
  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }
  const bookings = await BookingService.getUserBookings(userId);
  res.json(bookings);
};

export const getHotelBookings = async (req: Request, res: Response) => {
  const { hotelId } = req.params;
  const bookings = await BookingService.getHotelBookings(hotelId);
  res.json(bookings);
};