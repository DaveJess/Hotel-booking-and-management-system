import { Schema, model, models } from "mongoose";
import { IUser } from "../interfaces/user.interface"; 

const UserSchema = new Schema(
  {
    name: { type: String, required: false },
    fullName: { type: String, required: false },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    identification: { type: String, required: true },
    id_no: { type: Number, required: true },
    nin: { type: String, required: false },
    booking: { type: String, required: false },
    role: {
      type: String,
      enum: ["USER", "HOTEL", "ADMIN", "SUPER_ADMIN"],
      default: "USER" ,
    },
    isVerified: { type: Boolean, default: false },
    emailToken: { type: String },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export { User };
export default User;

// export interface IUser {
//   email: string;
//   password: string;
//   identification: string; // <-- Add this line
//   id_no: number;
//   booking?: string;
//   role?: "USER" | "HOTEL" | "ADMIN" | "SUPER_ADMIN";
//   isVerified?: boolean;
//   emailToken?: string;
//   // ...other properties...
// }

// export default models.User || mongoose.model("User", UserSchema);
