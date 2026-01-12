import { Room } from "../../models/room.model";

export const createRoom = async (data: any) => {
  return Room.create(data);
};

export const getRoomsByHotel = async (hotelId: string) => {
  return Room.find({ hotel: hotelId });
};

export const getAvailableRooms = async (hotelId: string) => {
  return Room.find({ hotel: hotelId, isBooked: false });
};
