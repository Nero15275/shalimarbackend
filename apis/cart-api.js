const express = require('express');
const router = express.Router()
const productModel = require('../models/product-model')
const cartModel = require('../models/cart-model')



router.post('/addtocart', async (req, res) => {
    const newItem = new cartModel(req.body)
    await newItem.save().then((savedItem) => {
        res.status(200).send(savedItem)
    }).catch((err) => {
        res.status(400).send(err)
    })

})
router.get('/getall', async (req, res) => {
    await cartModel.find().populate('productid').then((items) => {
        res.status(200).send(items)
    }).catch((err) => {
        res.status(400).send(err)
    })
})
router.delete('/delete/:id', async (req, res) => {
    await cartModel.findByIdAndDelete(req.params.id).then((items) => {
        res.status(200).send(items)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

module.exports = router