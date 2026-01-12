import mongoose, { Schema, Document } from "mongoose";

export interface IAdmin extends Document {
  email: string;
  password: string;
  role: string;
  name: string; // Added
  createdAt?: Date; // Added
  updatedAt?: Date; // Added
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    name: { type: String, required: true }, // Added
  },
  { timestamps: true } // Adds createdAt and updatedAt
);

const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;
