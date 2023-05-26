const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')
const persona = require('../controllers/PersonaController')
const loginFunctions = require('../controllers/LoginController')

// router.get('/test',main.test)
// router.post('/postData',main.postData)
// router.get('/index',main.index)
// router.get('/enviarDatos',main.enviarDatos)
// router.get('/vista_ejercicio',main.vista_ejercicio)
// router.post('/recibe',main.recibe)

//PARA LOGIN
router.get('/login',loginFunctions.loginForm)
router.post('/doLogin',loginFunctions.doLogin)
router.post('/preguntaopenai',main.preguntaOpenai)

module.exports = router

