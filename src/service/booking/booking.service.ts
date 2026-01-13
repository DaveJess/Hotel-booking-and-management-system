import { Booking } from "../../models/booking.model";
import { Room } from "../../models/room.model";

export const isRoomAvailable = async (
  roomId: string,
  checkIn: Date,
  checkOut: Date
): Promise<boolean> => {
  const conflictingBookings = await Booking.find({
    room: roomId,
    $or: [
      { checkIn: { $lt: checkOut }, checkOut: { $gt: checkIn } }
    ]
  });
  
  return conflictingBookings.length === 0;
};

export const createBooking = async (bookingData: any) => {
  const { roomId, checkIn, checkOut, user } = bookingData;
  
  const room = await (Room as any).findById(roomId).populate("hotel");
  if (!room) throw new Error("Room not found");

  const available = await isRoomAvailable(
    roomId,
    new Date(checkIn),
    new Date(checkOut)
  );

  if (!available) {
    throw new Error("Room not available for the selected dates");
  }

  const days =
    (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
    (1000 * 60 * 60 * 24);

  const totalAmount = days * (room.price || 100);

  const booking = await Booking.create({
    user,
    hotel: room.hotel._id,
    room: roomId,
    checkIn,
    checkOut,
    totalAmount,
  });

  return booking;
};

export const getUserBookings = async (userId: string) => {
  return (Booking as any).find({ user: userId }).populate('room hotel').exec();
};

export const getHotelBookings = async (hotelId: string) => {
  return (Booking as any).find({ hotel: hotelId }).populate('room user').exec();
};