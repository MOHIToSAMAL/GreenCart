import express from 'express';
import authUser from '../Middleware/authUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD } from '../Controllers/orderController.js';
import authSeller from '../Middleware/authSeller.js';


const orderRouter = express.Router();


orderRouter.post('/cod',authUser,placeOrderCOD);
orderRouter.get('/user',authUser,getUserOrders);
orderRouter.get('/seller',authSeller,getAllOrders);

export default orderRouter;