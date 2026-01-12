import mongoose, { Schema, models } from "mongoose";
import { Role } from "../interfaces/roles.interface";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    identification: { type: String, required: true },
    id_no: { type: Number, required: true },
    booking: { type: String, reuired: false },
    role: {
      type: String,
      enum: ["USER", "HOTEL", "ADMIN", "SUPER_ADMIN"],
      default: "USER",
    },
    isVerified: { type: Boolean, default: false },
    emailToken: { type: String },
  },
  { timestamps: true }
);

export default models.User || mongoose.model("User", UserSchema);
