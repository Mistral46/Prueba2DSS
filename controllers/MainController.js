//const { sanitize } = require("sanitizer")

const utils = require("../resources/utils")
//const router = express.Router()
//const main = require('..controllers/MainController')

const recibe = (request,response) =>{
    
    response.render('recibe',{locals:{datos:{
        input1: utils.validaSanitizer(request.body.input1),
        input2: utils.validaSanitizer(request.body.input2),
        input3: utils.validaSanitizer(request.body.input3),
        input4: utils.validaSanitizer(request.body.input4),
        select1:utils.validaSanitizer(request.body.select1)}}})

const vista_ejercicio = (request,response) =>{
    response.render('vista_ejercicio')
}
module.exports = {
      recibe,
    vista_ejercicio,
}}