import { Router } from 'express';
import { createHotel, getHotels, listAllHotels } from '../controllers/hotel.controller';
import { createHotelValidator } from '../validators/hotel.validator';
import { validate } from '../middleware/validate.middleware';

const router = Router();

router.post('/', createHotelValidator, validate, createHotel);
router.get('/', getHotels); // ?state=Abuja&city=Gwagwalada
router.get('/all', listAllHotels);

export default router;
