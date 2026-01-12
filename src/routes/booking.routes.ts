// import { Router } from "express";
// import { createBooking, confirmBooking } from "./booking.controller";
// import { auth } from "../../middlewares/auth";

// const router = Router();

// router.post("/", auth("USER"), createBooking);
// router.post("/:bookingId/confirm", auth("USER"), confirmBooking);

// export default router;


import { Router } from 'express';
import { createBooking, getUserBookings, getHotelBookings } from '../controllers/booking.controller';
import { authenticate } from '../middleware/auth.middleware';
import { createBookingValidator } from '../validators/booking.validator';
import { validate } from '../middleware/validate.middleware';

const router = Router();

router.post('/', authenticate, createBookingValidator, validate, createBooking);
router.get('/user', authenticate, getUserBookings);
router.get('/hotel/:hotelId', authenticate, getHotelBookings);

export default router;