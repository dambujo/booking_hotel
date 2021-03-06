import { Router } from 'express';
import authController from '../../controllers/authController';

const router = Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);

export default router;
