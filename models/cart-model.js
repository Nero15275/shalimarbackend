const mongoose = require('mongoose');
const productModel = require('./product-model');

const cartSchema = new mongoose.Schema({

    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: productModel,
        reqired: true
    },
    quantity: {
        type: Number,
        reqired: true

    },
    price: {
        type: Number,
        reqired: true
    }


}, { timestamps: true })
const cartModel = mongoose.model(`cart_model`, cartSchema)
module.exports = cartModel