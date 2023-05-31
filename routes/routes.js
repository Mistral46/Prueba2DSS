const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')
const persona = require('../controllers/PersonaController')
const loginFunctions = require('../controllers/LoginController')
const CorreoFunciones = require('../controllers/CorreoController')
const logexitoso =require('../controllers/ConexController')    

router.get('/test',main.test)
router.post('/postData',main.postData)
router.get('/index',main.index)
router.post('/enviarDatos',main.enviarDatos)
router.get('/ejercicio',main.ejercicio)
router.get('/ejercicio',main.ejercicio)
router.post('/recibeDataEjercicio',main.recibeDataEjercicio)
router.post('/preguntaopenai',main.preguntaOpenai)
///// PARA PERSONAS
router.get('/addpersona',persona.formulario)
router.post('/agregarPersonaMy',persona.agregarPersonaMy)
//router.post('/agregarPersonaPg',persona.agregarPersonaPg)
///PARA LOGIN
router.get('/login', loginFunctions.loginForm)
router.post('/doLogin', loginFunctions.doLogin)

//Para PRUEBA2
router.get('/exito',logexitoso.exito)
router.get('/prueba',CorreoFunciones.CorreoForm)
router.post('/inCorreo',CorreoFunciones.inCorreo)

module.exports = router
