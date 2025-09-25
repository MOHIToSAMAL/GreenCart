
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./Configs/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./Routes/userRoutes.js";
import sellerRouter from "./Routes/sellerRoutes.js";
import connetCloudinary from "./Configs/cloudinary.js";
import productRouter from "./Routes/productRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";
import addressRouter from "./Routes/addressRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

const app = express();
const PORT = process.env.PORT || 4001;

//Allow Multiple Origins
const allowedOrigins = ["http://localhost:5174","https://greencartin.netlify.app"]

// Middleware configuration
app.use(cors({
  origin: "https://foreverin.netlify.app", // your Netlify URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // if you use cookies
 }));
app.use(express.json());
app.use(cookieParser());

await connectDB();
await connetCloudinary();

app.get('/', (req,res) => {
    res.send("API is Working")
})

//this is for userRouter = login creating user everything
app.use('/api/user', userRouter)

//this is for seller Router
app.use('/api/seller',sellerRouter)

//this is for the products Router
app.use('/api/product',productRouter)

//this is for the Cart Router
app.use('/api/cart',cartRouter)

//this is for the Address Router
app.use('/api/address',addressRouter)

//this is for the Orders Router
app.use('/api/order',orderRouter)


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
