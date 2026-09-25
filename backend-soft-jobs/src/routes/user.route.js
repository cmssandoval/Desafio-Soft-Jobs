import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const router = Router();

router.post('/usuarios', userController.create);
router.post('/login', userController.login);
router.get('/usuarios', userController.read);

export default router;