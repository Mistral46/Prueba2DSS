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
    }
const vista_ejercicio = (request,response) =>{
    response.render('vista_ejercicio')
}
const preguntaOpenai =async(request,response)=>{
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
          apiKey: process.env.OPENAI_API_KEY,
        });
        console.log(process.env.OPENAI_API_KEY)
        const openai = new OpenAIApi(configuration);
        pregunta = `${request.body.pregunta}`
        console.log(pregunta);
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: pregunta
          });
     
          response.json(completion.data.choices[0].text.trim())
    
    }

module.exports = {
      recibe,
    vista_ejercicio,
    preguntaOpenai,
}