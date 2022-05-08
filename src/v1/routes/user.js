import { Router } from 'express';
import userController from '../../controllers/uerController';
import authMiddleware from '../../middleware/authMiddleware';

const router = Router();

router.get('/users', userController.getAllUsers);

router.get('/users/:useId', userController.getOneUser);

router.post('/users', userController.createNewUser);

router.patch('/users/:userId', userController.updateOneUser);

router.delete('/users/:userId', userController.deleteOneUser);

export default router;
