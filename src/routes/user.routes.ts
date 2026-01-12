import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import { createUserValidator, updateUserValidator } from '../validators/user.validator';
import { validate } from '../middleware/validate.middleware';
import { auth } from '../middleware/auth.middleware';

const router = Router();

router.post('/', createUserValidator, validate, UserController.createUser);
router.get('/:id', auth, UserController.getUserById);
router.put('/:id', auth, updateUserValidator, validate, UserController.updateUser);
router.delete('/:id', auth, UserController.deleteUser);
router.get('/', auth, UserController.getAllUsers);

export default router;
