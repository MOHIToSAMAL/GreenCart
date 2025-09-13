import express from 'express'
import { addAddress } from '../Controllers/addressController.js';
import authUser from '../Middleware/authUser.js';

const addressRouter = express.Router();

addressRouter.post('/add',authUser,addAddress);
addressRouter.post('/get',authUser,addAddress);


export default addressRouter;