const express = require('express');
const productRouter = express.Router();
const { addproduct, listproduct, removeproduct } = require('../controllers/productController');
const multer = require('multer');
const { storage } = require('../config/cloudinary');  

const upload = multer({ storage }); 
productRouter.post('/add', upload.single('image'), addproduct);
productRouter.get('/list', listproduct);
productRouter.delete('/remove', removeproduct);

module.exports = productRouter;
