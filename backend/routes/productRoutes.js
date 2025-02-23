const express = require('express');
const router = express.Router();
const { addProduct, editProduct } = require('../controllers/productController');
const { isAdmin, isManager } = require('../middleware/authMiddleware');

// Admin and Manager can add products
router.post('/', isAdmin, addProduct);

// Admin and Manager can edit products
router.put('/:id', isAdmin, editProduct);

module.exports = router;