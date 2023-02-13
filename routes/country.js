const express = require('express');
const countryControlers = require('../controllers/country')

const router = express.Router()

router.post('/country/add', countryControlers.addCountry)
router.get('/countries', countryControlers.getAllCountries)
router.get('/country', countryControlers.getCountry)

module.exports = router