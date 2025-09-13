import jwt from 'jsonwebtoken'
import User from '../Models/User.js';

// Login Seller : '/api/seller/login'

export const sellerLogin = async(req,res) => {
    const {email, password} = req.body;


    try {
        if(password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL ){
            const token = jwt.sign({email}, process.env.JWT_SECRET,{expiresIn: '7d'});
          res.cookie('sellerToken',token,{
          httpOnly: true, 
          secure: process.env.NODE_ENV === 'production',   //Use Secure cookies in producttion
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //CSRF protection
          maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiration time , {millisecond}
        })   
        return  res.status(200).json({
            success: true,
            User: {Email: User.email , Name: User.name},
            message: "Logged In"
          })
        }else{
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        
    } catch (error) {
      return res.status(400).json({
        message: error.message
      })
        
    }

}


// To check Seller Authentication : "/api/seller/is-auth"
export const isSellerAuth = async(req,res) => {
  try {

    return res.status(200).json({
      success: true,
      message: "Seller is Authenticated",
    })
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

// Logout Seller : '/api/seller/logout'

export const sellerLogout = async(req,res) => {
  try {

    res.clearCookie('sellerToken',{
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',   //Use Secure cookies in producttion
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //CSRF protection
      
    })

    return res.status(200).json({
      success: true,
      message: "Logged Out"
    })
    
  } catch (error) {
     return res.status(400).json({
      success: false,
      message: error.message
    })   
  }
}