import mongoose, { Schema, models } from "mongoose";


const ReservationSchema = new Schema(
  {
    userId: { type: String, ref: "User", required: true },
    hotel: {
      type: Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    checkIn: Date,
    checkOut: Date,
    nights: Number,
    totalAmount: Number,
    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Reservation =
  models.Reservation || mongoose.model("Reservation", ReservationSchema);
