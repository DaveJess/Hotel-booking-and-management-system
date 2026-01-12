// validators/user.validator.ts
// Add your user validation logic here

import { body } from 'express-validator';

export const createUserValidator = [
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('name').notEmpty().withMessage('Name is required'),
];

export const updateUserValidator = [
  body('email').optional().isEmail().withMessage('Email is invalid'),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('name').optional().notEmpty().withMessage('Name is required'),
];
