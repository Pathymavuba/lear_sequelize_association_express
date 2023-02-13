const express = require('express');
const capitalControllers = require('../controllers/capital')
const router = express.Router()

router.post('/capital/add', capitalControllers.addCapital)
router.get('/capitals',capitalControllers.getCapitals)
router.get('/capital/:id',capitalControllers.getCapital)
router.put('/capital/:id',capitalControllers.modify)
router.delete('/capital/:id',capitalControllers.delete)


module.exports = router
