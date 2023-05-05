const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')

router.get('/vista_ejercicio',main.vista_ejercicio)
router.post('/recibe',main.recibe)

module.exports = router

