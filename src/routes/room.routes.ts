
import { Router } from 'express';
import { createRoom, getRooms, getAvailableRooms } from '../controllers/room.controller';
import { createRoomValidator } from '../validators/room.validator';
import { validate } from '../middleware/validate.middleware';

const router = Router();

router.post('/', createRoomValidator, validate, createRoom);
router.get('/:hotelId', getRooms);
router.get('/:hotelId/available', getAvailableRooms);

export default router;
