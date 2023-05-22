const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hasOffer: {
        type: Boolean,
        default: false,

    },
    img: {
        type: String,
        default: `default`
    }


}, { timestamps: true })
const productModel = mongoose.model(`product_model`, productSchema)
module.exports = productModel