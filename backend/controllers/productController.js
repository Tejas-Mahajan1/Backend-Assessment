const Product = require('../models/Product');

// Add a new product
const addProduct = async(req, res) => {
    const { name, description, price, image } = req.body;
    try {
        const product = await Product.create({
            name,
            description,
            price,
            image,
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit a product
const editProduct = async(req, res) => {
    const { id } = req.params;
    const { name, description, price, image } = req.body;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.image = image || product.image;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addProduct, editProduct };