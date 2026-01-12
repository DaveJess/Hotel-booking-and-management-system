import { Request, Response } from "express";
import * as RoomService from "../service/room/room.service";

export const createRoom = async (req: Request, res: Response) => {
  const room = await RoomService.createRoom(req.body);
  res.status(201).json(room);
};

export const getRooms = async (req: Request, res: Response) => {
  const { hotelId } = req.params;
  const rooms = await RoomService.getRoomsByHotel(hotelId);
  res.json(rooms);
};

export const getAvailableRooms = async (req: Request, res: Response) => {
  const { hotelId } = req.params;
  const rooms = await RoomService.getAvailableRooms(hotelId);
  res.json(rooms);
};
