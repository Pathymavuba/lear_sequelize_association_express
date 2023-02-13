const express = require('express');
const customerControllers = require('../controllers/customerproduct')

const router = express.Router()


router.post('/achat/add',customerControllers.addCustomerproduct)
router.get('/achats',customerControllers.getAllachats)
router.get('/achat/:id',customerControllers.getAchat)

module.exports = router
