
import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


//Register User : /api/user/register
export const register = async (req,res) => {
  try {

    const {name,email,password} = req.body;

    if(!name || !email || !password){
      return res.json({
        success: false,
      message: "Missing Details"
    })
    }

    const existingUser = await User.findOne({email})

    if(existingUser){
      return res.status(200).json({
        success: false,
        message: "User Already Exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({name,email,password: hashedPassword})

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn: '7d'})

    res.cookie('token',token,{
      httpOnly: true, // Prevent Javascript to  access cookie
      secure: process.env.NODE_ENV === 'production',   //Use Secure cookies in producttion
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiration time , {millisecond}
    })

    return  res.status(200).json({
        success: true,
        User: {email: user.email, name: user.name}
      })
    
  } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
  }
}

//Login User : /api/user/login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password){
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      })
    }

    const user = await User.findOne({ email });

    if(!user){
        return res.status(400).json({
        success: false,
        message: " Invalid Email or Password required"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return res.status(400).json({
        success: false,
        message: " Invalid Email or Password required"
      })      
    }


    // if password match then for generating token
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn: '7d'})

    res.cookie('token',token,{
      httpOnly: true, // Prevent Javascript to  access cookie
      secure: process.env.NODE_ENV === 'production',   //Use Secure cookies in producttion
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiration time , {millisecond}
    })  

        return  res.status(200).json({
        success: true,
        User: {email: user.email, name: user.name},
        message: "Welcome User Credential Matched"
      })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


// Check Auth : '/api/user/is-auth' to check if user is authenticate or not and provide the user data

export const isAuth = async(req,res) => {
  try {

    const {userId} = req.body;

    const user = await User.findById(userId).select("-password") // To exclude  or remove password

    return res.status(200).json({
      success: true,
      message: "User is Authenticated",
      User:user
    })
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


// Logout User : '/api/user/logout'

export const logout = async(req,res) => {
  try {

    res.clearCookie('token',{
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



