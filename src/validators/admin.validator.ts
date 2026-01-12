// validators/admin.validator.ts
// Add your admin validation logic here

import { body } from 'express-validator';

export const createAdminValidator = [
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('name').notEmpty().withMessage('Name is required'),
];

export const updateAdminValidator = [
  body('email').optional().isEmail().withMessage('Email is invalid'),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('name').optional().notEmpty().withMessage('Name is required'),
];
