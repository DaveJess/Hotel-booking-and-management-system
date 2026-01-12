import { Router } from 'express';
import ReservationController from '../controllers/reservation.controller';
import { createReservationValidator, updateReservationValidator } from '../validators/reservation.validator';
import { validate } from '../middleware/validate.middleware';
import auth from '../middleware/auth.middleware';

const router = Router();

router.post('/', auth, createReservationValidator, validate, ReservationController.createReservation);
router.get('/:id', auth, ReservationController.getReservationById);
router.put('/:id', auth, updateReservationValidator, validate, ReservationController.updateReservation);
router.delete('/:id', auth, ReservationController.deleteReservation);
router.get('/', auth, ReservationController.getAllReservations);

export default router;
