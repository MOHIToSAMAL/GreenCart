import { v2 as cloudinary} from 'cloudinary';

const connetCloudinary = async(req,res) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_KEY,
        api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
    })
}

export default connetCloudinary