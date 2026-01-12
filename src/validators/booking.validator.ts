// validators/booking.validator.ts
// Add your booking validation logic here

import { body } from 'express-validator';

export const createBookingValidator = [
  body('user').notEmpty().withMessage('User ID is required'),
  body('room').notEmpty().withMessage('Room ID is required'),
  body('hotel').notEmpty().withMessage('Hotel ID is required'),
  body('checkIn').isISO8601().withMessage('Check-in date is required and must be a valid date'),
  body('checkOut').isISO8601().withMessage('Check-out date is required and must be a valid date'),
  body('guests').isInt({ min: 1 }).withMessage('Guests must be at least 1'),
];

export const updateBookingValidator = [
  body('user').optional().notEmpty().withMessage('User ID is required'),
  body('room').optional().notEmpty().withMessage('Room ID is required'),
  body('hotel').optional().notEmpty().withMessage('Hotel ID is required'),
  body('checkIn').optional().isISO8601().withMessage('Check-in date must be a valid date'),
  body('checkOut').optional().isISO8601().withMessage('Check-out date must be a valid date'),
  body('guests').optional().isInt({ min: 1 }).withMessage('Guests must be at least 1'),
];
