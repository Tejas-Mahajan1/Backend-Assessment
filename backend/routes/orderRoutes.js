const express = require('express');
const router = express.Router();
const { placeOrder, getOrders } = require('../controllers/orderController');
const { protect, isManager } = require('../middleware/authMiddleware');

// Employee can place orders
router.post('/', protect, placeOrder);

// Manager can view orders
router.get('/', isManager, getOrders);

module.exports = router;