import express from 'express';
import { isAuth, login, logout, register } from '../Controllers/authController.js';
import authUser from '../Middleware/authUser.js';

const userRouter = express.Router();

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/is-auth',authUser,isAuth)
userRouter.get('/logout',authUser,logout)

export default userRouter;