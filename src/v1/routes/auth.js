import { Router } from 'express';
import authController from '../../controllers/authController';

const router = Router();

router.post('/auth/signin', authController.signIn);
router.post('/auth/change-password', authController.changePassword);
