


// update User CartData : "/api/cart/update"

export const updateCart = async(req,res) => {
    try {

        const {userId, cartItems} = req.body
        await User.findByIdAndUpdate(userId,{cartItems})

        return res.statsu(200).json({
            success: true,
            message: "Cart Updated"
        })
        
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            message: error.message
        })
    }
}