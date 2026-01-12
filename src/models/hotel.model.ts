import { Schema, model, Types } from "mongoose";

const HotelSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    state: { type: String, required: true },
    city: { type: String, required: true },
    address: String,
    starRating: { type: Number, min: 1, max: 5 },
    images: [String],
    owner: { type: Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Hotel = model("Hotel", HotelSchema);
