import { Booking } from "../models/booking.model";
import { Types } from "mongoose"; 

interface CreateBookingDTO {
  userId: string;
  hotelId: string;
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  totalAmount: number;
}

export class BookingRepository {
  /**
   * Create a new booking (PENDING by default)
   */
  static async create(data: CreateBookingDTO) {
    return Booking.create({
      user: new Types.ObjectId(data.userId),
      hotel: new Types.ObjectId(data.hotelId),
      room: new Types.ObjectId(data.roomId),
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      totalAmount: data.totalAmount,
      status: "PENDING",
    });
  }

  /**
   * Confirm booking after payment
   */
  static async confirm(bookingId: string) {
    return Booking.findByIdAndUpdate(
      bookingId,
      { status: "CONFIRMED" },
      { new: true }
    );
  }

  /**
   * Cancel booking
   */
  static async cancel(bookingId: string) {
    return Booking.findByIdAndUpdate(
      bookingId,
      { status: "CANCELLED" },
      { new: true }
    );
  }

  /**
   * Find booking by ID
   */
  static async findById(bookingId: string) {
    return Booking.findById(bookingId)
      .populate("hotel")
      .populate("room")
      .populate("user");
  }

  /**
   * Get all bookings by user
   */
  static async findByUser(userId: string) {
    return Booking.find({ user: userId })
      .populate("hotel")
      .populate("room")
      .sort({ createdAt: -1 });
  }

  /**
   * Get all bookings for a hotel
   */
  static async findByHotel(hotelId: string) {
    return Booking.find({ hotel: hotelId })
      .populate("room")
      .populate("user")
      .sort({ createdAt: -1 });
  }

  /**
   * Check if room is available for date range
   */
  static async isRoomAvailable(
    roomId: string,
    checkIn: Date,
    checkOut: Date
  ): Promise<boolean> {
    const conflict = await Booking.findOne({
      room: roomId,
      status: "CONFIRMED",
      $or: [
        {
          checkIn: { $lt: checkOut },
          checkOut: { $gt: checkIn },
        },
      ],
    });

    return !conflict;
  }

  /**
   * Count active bookings for a room
   */
  static async countActiveBookings(roomId: string) {
    return Booking.countDocuments({
      room: roomId,
      status: "CONFIRMED",
    });
  }
}
