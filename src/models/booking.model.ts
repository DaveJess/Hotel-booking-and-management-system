import { Schema, model, Types } from "mongoose";

const BookingSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    hotel: { type: Types.ObjectId, ref: "Hotel", required: true },
    room: { type: Types.ObjectId, ref: "Room", required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "CANCELLED"],
      default: "PENDING",
    },
    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Booking = model("Booking", BookingSchema);
