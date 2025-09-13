import Order from "../Models/Order.js";
import Product from "../Models/Product.js";

// Place Order COD : "/api/order/cod"

export const placeOrderCOD = async(req,res) => {
    try {

        const {userId, items, address} = req.body;

        if(!address || items.length === 0){
            return res.status(400).json({
                success: false,
                message: "Invalid Data"
            })
        }

        // Calculate Th Amount Using Items
        let amount = await items.reduce(async(ActiveXObject,item)=>{
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        //Aff Tax charge ( 2%)

        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD"
        });

        return res.statsu(200).json({
            success: true,
            message: "Order Placed Successfully"
        })
        
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            message: error.message
        })
    }
}

// Get Orders by User ID: "/api/order/user"

export const getUserOrders = async(req,res) => {
    try {

        const {userId} = req.body;

        const orders = await Order.find({
            userId,
            $or: [{paymentType: "COD"}, {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1})

        return res.statsu(200).json({
            success: true,
            message: "Here's the Order Details of the User",
            orders
        })
        
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            message: error.message
        })
    }
}

//Get All Orders ( for seller / admin) : "/api/order/seller"

export const getAllOrders = async(req,res) => {
    try {

        const orders = await Order.find({
            $or: [{paymentType: "COD"}, {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1})

        return res.statsu(200).json({
            success: true,
            message: "Here are All the Order Details",
            orders
        })
        
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            message: error.message
        })
    }
}
