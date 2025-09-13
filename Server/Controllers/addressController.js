import Address from "../Models/Address.js"


//Add address : "/api/address/add"

export const addAddress = async(req,res) => {
    try {

        const {address, userId} = req.body
        await Address.create({...address, userId})
        
        return res.status(200).json({
            success: true,
            message: "Address Added Successfully"
        })
        
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            message: error.message
        })
    }
}


//Get Address : "/api/address/get"

export const getAddress = async(req,res) => {
    try {
        const {userId} = req.body
        const addresses = await Address.find({userId})
        return res.status(200).json({
            success: true,
            addresses
        }) 
        
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            message: error.message
        })
        
    }
}