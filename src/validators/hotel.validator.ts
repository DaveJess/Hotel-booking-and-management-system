// validators/hotel.validator.ts
// Add your hotel validation logic here

import { body } from 'express-validator';

export const createHotelValidator = [
  body('name').notEmpty().withMessage('Hotel name is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('country').notEmpty().withMessage('Country is required'),
];

export const updateHotelValidator = [
  body('name').optional().notEmpty().withMessage('Hotel name is required'),
  body('address').optional().notEmpty().withMessage('Address is required'),
  body('city').optional().notEmpty().withMessage('City is required'),
  body('country').optional().notEmpty().withMessage('Country is required'),
];
