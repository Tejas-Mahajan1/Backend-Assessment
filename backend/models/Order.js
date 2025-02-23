const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    productDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);