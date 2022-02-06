const express = require('express')
const { showProducts, addProducts } = require('../controllers/productsController')
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')

const router = express.Router()


router.get('/products',showProducts)
router.post('/uploadproducts', upload.single('image') , addProducts)




module.exports = router