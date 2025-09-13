import { updateCart } from "../Controllers/cartController.js";
import express from "express";
import authUser from "../Middleware/authUser.js";

const cartRouter = express.Router();

cartRouter.post('/update',authUser,updateCart)

export default cartRouter;