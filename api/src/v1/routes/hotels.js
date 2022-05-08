import { Router } from 'express';
import hotelController from '../../controllers/hotelController';

const router = Router();

router.get('/', hotelController.getAllHotels);

router.get('/:hotelId', hotelController.getOneHotel);

router.post('/', hotelController.createNewHotel);

router.patch('/:hotelId', hotelController.createNewHotel);

router.delete('/:hotelId', hotelController.deleteOneHotel);

export default router;
