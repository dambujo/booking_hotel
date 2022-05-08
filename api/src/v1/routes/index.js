import { Router } from 'express';
import user from './users';
import auth from './auth';
import hotel from './hotels';
import room from './rooms';

const router = Router();

router.use('/api/v1/users', user);
router.use('/api/v1/auth', auth);
router.use('/api/v1/hotels', hotel);
//router.use('/api/v1/rooms', )

export default router;
