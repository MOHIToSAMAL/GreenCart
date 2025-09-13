import { v2 as cloudinary } from "cloudinary";
import Product from "../Models/Product.js";

// Add Product : "/api/product/add"
export const addProduct = async(req,res) => {
    try {

        let productData = JSON.parse(req.body.productData)

        const images = req.files;

        let imagesUrl =  await Promise.all(
            images.map(async(item) => {
                let result = await cloudinary.uploader.upload(item.path,
                    {resources_type : 'image'}
                );
                return result.secure_url
            })
        )

        //To store the datat in DB
        await Product.create({...productData, image: imagesUrl})

        return res.status(200).json({
            success: true,
            message: "Product Added"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:error.message
        })
    }
}

//Get Product : "/api/product/list"
export const productList = async(req,res) => {

    try {

        const products = await Product.find({})

        return res.status(200).json({
            success: true,
            products
        })
        
    } catch (error) {
        
        console.log(error)
        return res.status(400).json({
            message:error.message
        })
    }
    
}


//Get Single Product : "/api/product/id"

export const productById = async(req,res) => {
    try {
        
        const {id} = req.body;
        const product = await Product.findById(id);
        return res.status(200).json({
            success: true,
            product
        })
        
        
    } catch (error) {
        
        console.log(error)
        return res.status(400).json({
            message:error.message
        })
    }
    
}


//Change Product inStock : "api/product/stock"

export const changeStock = async(req,res) => {
    try {
        const {id,inStock} = req.body;
        await Product.findByIdAndUpdate(id,{inStock})
        return res.status(200).json({
            success: true,
            message:"Stock Updated"
        })

        
    } catch (error) {
        
        console.log(error)
        return res.status(400).json({
            message:error.message
        })
    }

}