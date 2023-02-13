const express = require('express');
const customerControllers = require('../controllers/customer')

const router = express.Router()

router.post('/customer/add',customerControllers.createCustomer)
router.get("/customers",customerControllers.getAllCustomers)


module.exports = router