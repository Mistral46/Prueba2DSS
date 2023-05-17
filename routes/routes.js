const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')
const persona = require('../controllers/PersonaController')

router.get('/test',main.test)
router.post('/postData',main.postData)
router.get('/index',main.index)
router.get('/vista_ejercicio',main.vista_ejercicio)
router.post('/recibe',main.recibe)

module.exports = router

