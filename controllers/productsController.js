const products = require("../models/productsModal");
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')

exports.showProducts = async (req, res) => {
  try {
    const data = await products.find();
    res.json({ message: "Success", data: data });
  } catch (error) {
    throw new Error(error);
  }
};


exports.addProducts = async (req, res) => {

  // console.log('==>>>',req.body)
  try {


    const result = await cloudinary.uploader.upload(req.file.path)

    // create instance of user
    const product = await new products({
      title:req.body.title,
      price:req.body.price,
      description:req.body.desc,
      category:req.body.category,
      image:result.secure_url,
      cloudinary_id:result.public_id,
    }).save()
    
    res.json({message:'Success',data:product})
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};
