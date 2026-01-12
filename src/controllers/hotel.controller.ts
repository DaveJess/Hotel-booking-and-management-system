import { Request, Response } from "express";
import * as HotelService from "../service/hotel/hotel.service";

export const createHotel = async (req: Request, res: Response) => {
  const hotel = await HotelService.createHotel(req.body);
  res.status(201).json(hotel);
};

export const getHotels = async (req: Request, res: Response) => {
  const { state, city } = req.query;
  const hotels = await HotelService.getHotelsByStateCity(
    state as string,
    city as string
  );
  res.json(hotels);
};

export const listAllHotels = async (_req: Request, res: Response) => {
  const hotels = await HotelService.getAllHotels();
  res.json(hotels);
};
