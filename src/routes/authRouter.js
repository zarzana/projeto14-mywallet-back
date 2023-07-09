import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { signInValidator, signUpValidator } from '../validators/authValidators.js';

const router = Router();

router.post('/signup', signUpValidator, signUp);
router.post('/signin', signInValidator, signIn);

export default router;