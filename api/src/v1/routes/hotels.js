import { Router } from 'express';
import hotelController from '../../controllers/hotelController';

const router = Router();

router.get('/', hotelController.getAllHotels);

router.get('/:id', hotelController.getOneHotel);

router.post('/', hotelController.createNewHotel);

router.patch('/:id', hotelController.updateHotel);

router.delete('/:id', hotelController.deleteOneHotel);

export default router;
