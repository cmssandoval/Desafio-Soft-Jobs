import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/usuarios', userController.create);
router.post('/login', userController.login);
router.get('/usuarios', authMiddleware, userController.read);

export default router;