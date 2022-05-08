import { Router } from 'express';
import user from './user';
import auth from './auth';

const router = Router();

router.use('/api/v1/', user);

export default router;
