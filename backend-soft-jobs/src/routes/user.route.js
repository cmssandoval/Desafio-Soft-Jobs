import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import credentialsMiddleware from '../middlewares/credentials.middleware.js';

const router = Router();

router.post('/usuarios', credentialsMiddleware('register'), userController.create);
router.post('/login', credentialsMiddleware('login'), userController.login);
router.get('/usuarios', authMiddleware, userController.read);

export default router;