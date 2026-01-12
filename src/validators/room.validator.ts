// validators/room.validator.ts
// Add your room validation logic here

import { body } from 'express-validator';

export const createRoomValidator = [
  body('number').notEmpty().withMessage('Room number is required'),
  body('type').notEmpty().withMessage('Room type is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('hotel').notEmpty().withMessage('Hotel ID is required'),
];

export const updateRoomValidator = [
  body('number').optional().notEmpty().withMessage('Room number is required'),
  body('type').optional().notEmpty().withMessage('Room type is required'),
  body('price').optional().isNumeric().withMessage('Price must be a number'),
  body('hotel').optional().notEmpty().withMessage('Hotel ID is required'),
];
