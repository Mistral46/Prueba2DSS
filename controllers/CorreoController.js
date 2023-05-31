const myConnection = require('../database/config')
const utils = require('../resources/utils')

const CorreoForm = (request,response) =>{
    response.render('prueba')
}
const inCorreo =  async (request,response)=>{
     const sql = `select * from clientes where correo = "${await utils.validaOpenaiSql(request.body.correo)}" and password = "${await utils.validaOpenaiSql(request.body.password)}"`  
     console.log(sql)
     const res =  myConnection.query(sql,
        function(err, results) {
            console.log(results)
            console.log(err)
            if(results[0]){
                response.json({message:"Registro Exitoso"})
            }else{
                response.json({message:"Error de ingreso"})
            }
        }
      );

}
module.exports = {
    CorreoForm,
    inCorreo,
}
