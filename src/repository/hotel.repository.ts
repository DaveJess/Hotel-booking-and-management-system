import { Hotel } from "../models/hotel.model";


export const HotelRepository = {
  create: (data: any) => Hotel.create(data),
  findAll: () => Hotel.find().populate("rooms"),
  findById: (id: string) => Hotel.findById(id).populate("rooms"),
  findByState: (state: string) => Hotel.find({ state }),
};
