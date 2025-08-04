import axios from "axios";

export const uploadImages = async (uploadFile) => {

    let file = new FormData();
    file.append('file', uploadFile);
    file.append("upload_preset", "Bookmyshow")
    file.append("cloud_name", "dgzkjqixb")

    let res = await axios.post(`https://api.cloudinary.com/v1_1/dgzkjqixb/image/upload`, file)
    return res.data.secure_url
} 