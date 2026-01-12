import { Hotel } from "../../models/hotel.model";

export const createHotel = async (data: any) => {
  return Hotel.create(data);
};

export const getHotelsByStateCity = async (state: string, city?: string) => {
  const filter: any = { state };
  if (city) filter.city = city;
  return Hotel.find(filter);
};

export const getAllHotels = async () => {
  return Hotel.find();
};
