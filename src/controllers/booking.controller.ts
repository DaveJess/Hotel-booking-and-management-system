import { Request, Response } from "express";
import { Booking } from "../models/booking.model";
import { Room } from "../models/room.model";
import { isRoomAvailable } from "../service/booking/booking.service";


// export const createBooking = async (req: Request, res: Response) => {
//   const { roomId, checkIn, checkOut } = req.body;
//   const userId = req.user!.id;

//   const room = await Room.findById(roomId).populate("hotel");
//   if (!room) return res.status(404).json({ message: "Room not found" });

//   const available = await isRoomAvailable(
//     roomId,
//     new Date(checkIn),
//     new Date(checkOut)
//   );

//   if (!available) {
//     return res.status(400).json({ message: "Room not available" });
//   }

//   const days =
//     (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
//     (1000 * 60 * 60 * 24);

//   const totalAmount = days * room.price;

//   const booking = await Booking.create({
//     user: userId,
//     hotel: room.hotel,
//     room: roomId,
//     checkIn,
//     checkOut,
//     totalAmount,
//   });

//   res.status(201).json(booking);
// };

// import { Request, Response } from "express";
import * as BookingService from "../service/booking/booking.service";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = await BookingService.createBooking({
      ...req.body,
      user: req.user.id, // from auth middleware
    });
    res.status(201).json(booking);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserBookings = async (req: Request, res: Response) => {
  const bookings = await BookingService.getUserBookings(req.user.id);
  res.json(bookings);
};

export const getHotelBookings = async (req: Request, res: Response) => {
  const { hotelId } = req.params;
  const bookings = await BookingService.getHotelBookings(hotelId);
  res.json(bookings);
};