import { Router } from 'express';
import userController from '../../controllers/uerController';
import authMiddleware from '../../middleware/authMiddleware';

const router = Router();

router.get('/', userController.getAllUsers);

router.get('/:useId', userController.getOneUser);

router.post('/', userController.createNewUser);

router.patch('/:userId', userController.updateOneUser);

router.delete('/:userId', userController.deleteOneUser);

export default router;
