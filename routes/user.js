const express = require('express');
const userControlers = require('../controllers/user')

const router = express.Router()

router.post('/user/add',userControlers.createUser)
router.get('/users',userControlers.getAllUsers)


module.exports = router