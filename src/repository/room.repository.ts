import { Room } from "../models/room.model";

export const RoomRepository = {
  create: (data: any) => Room.create(data),
  findByHotel: (hotelId: string) =>
    Room.find({ hotel: hotelId, isAvailable: true }),
  updateAvailability: (roomId: string, status: boolean) =>
    Room.findByIdAndUpdate(roomId, { isAvailable: status }),
};
