import express from 'express';
import { signup, login } from '../controllers/userController.js';

const userRouter = express.Router();

// Signup route
userRouter.post('/signup', signup);

// Login route
userRouter.post('/login', login);

export default userRouter;
