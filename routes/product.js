const express = require('express');
const productControllers = require('../controllers/product.Js')

const router = express.Router()

router.post('/product/add',productControllers.createProduct)
router.get("/products",productControllers.getAllProducts)


module.exports = router