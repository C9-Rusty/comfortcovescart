const productModel = require('../models/productModel');
const { cloudinary } = require('../config/cloudinary');

const addproduct = async (req, res) => {
  try {
    const product = await productModel.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.path, // ✅ Full Cloudinary URL
    });
    res.json({ success: true, message: 'product added' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Error adding product' });
  }
};

const listproduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
};

const removeproduct = async (req, res) => {
  try {
    const { id } = req.query;
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'product not found' });
    }

    // Optional: delete image from Cloudinary
    const publicId = product.image.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(`ComfortCoves_uploads/${publicId}`);

    await productModel.deleteOne({ _id: id });
    res.status(200).json({ success: true, message: 'product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting product' });
  }
};

module.exports = { addproduct, listproduct, removeproduct };
