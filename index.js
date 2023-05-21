const express = require('express')
const cors = require('cors');
require(`dotenv`).config()
const mongoose = require(`./dbconnection/dbconnection`)
const product = require('./apis/product-api')
const cart = require('./apis/cart-api')
const app = express()
const port = process.env.port || 8000
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(`/product`, product)
app.use(`/cart`, cart)

app.listen(port, () => console.log(`server is running ar ${port}`))
