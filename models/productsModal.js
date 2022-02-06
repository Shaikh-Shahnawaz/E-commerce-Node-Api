const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinary_id:{
    type:String
  },
  time: {
    type: Date,
    default: Date.now,
  },
  
});

const products = mongoose.model('products',productsSchema)

module.exports = products;