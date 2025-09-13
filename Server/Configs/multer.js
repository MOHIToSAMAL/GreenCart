import multer from "multer";

//To upload any image on cloudinary storage
export const upload = multer({storage: multer.diskStorage({})})