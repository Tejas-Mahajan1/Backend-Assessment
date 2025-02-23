const Order = require('../models/Order');

// Place a new order
const placeOrder = async(req, res) => {
    const { customerName, productDetails, orderStatus } = req.body;
    try {
        const order = await Order.create({
            customerName,
            productDetails,
            orderStatus,
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get orders (for managers to view their team's orders)
const getOrders = async(req, res) => {
    try {
        const orders = await Order.find().populate('productDetails');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { placeOrder, getOrders };