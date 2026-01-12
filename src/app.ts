import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import hotelRoutes from "./routes/hotel.routes";
import roomRoutes from "./routes/room.routes";
import bookingRoutes from "./routes/booking.routes";
import connectDB from "../src/database/db";
import errorHandler from "./middleware/error.middleware";
import { seedSuperAdmin } from "../src/utils/seed.superadmin";

seedSuperAdmin();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

app.use(errorHandler); 

export default app;
