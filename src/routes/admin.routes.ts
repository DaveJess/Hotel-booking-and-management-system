import { Router } from 'express';
import AdminController from '../controllers/admin.controller';
import { createAdminValidator, updateAdminValidator } from '../validators/admin.validator';
import { validate } from '../middleware/validate.middleware';
import auth from '../middleware/auth.middleware';

const router = Router();

router.post('/', createAdminValidator, validate, AdminController.createAdmin);
router.get('/:id', auth, AdminController.getAdminById);
router.put('/:id', auth, updateAdminValidator, validate, AdminController.updateAdmin);
router.delete('/:id', auth, AdminController.deleteAdmin);
router.get('/', auth, AdminController.getAllAdmins);

export default router;
