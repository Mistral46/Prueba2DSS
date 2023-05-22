const myConnection = require ('../database/config')

const agregarPersonaMy = async(request,response) => {
    await myConnection.query(
        `insert into persona(nombre,apellido,direccion)values 
        ("${request.body.nombre.value}","${request.body.apellido}",
        "${request.body.direccion.value}")`,
              
        
        function(err,results){
            console.log(results);
            console.log(err);
        } 
    );
}

const formulario = (request,response)=>{
    response.render('persona/addpersona')
    
}
module.exports = {
    agregarPersonaMy,
    formulario,
}