const express = require('express')
const router = express.Router()
const service = require('./food.service.js')
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.get('/', service.getAll)
router.get('/:cuisine', service.getByCategory)

module.exports = router