import { Schema, model, Types } from "mongoose";

const RoomSchema = new Schema(
  {
    hotel: { type: Types.ObjectId, ref: "Hotel", required: true },
    roomType: { type: String, required: true },
    price: { type: Number, required: true },
    totalRooms: { type: Number, required: true },
    images: [String],
  },
  { timestamps: true }
);

export const Room = model("Room", RoomSchema);
