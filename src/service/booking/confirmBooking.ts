import { Request, Response, NextFunction } from "express";
import { Booking } from "../../models/booking.model";

export const confirmBooking = async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  const booking = await Booking.findById(bookingId);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  booking.status = "CONFIRMED";
  await booking.save();

  res.json({ message: "Booking confirmed", booking }); 
};
