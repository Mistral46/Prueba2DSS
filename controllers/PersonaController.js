const myConnection = require ('../database/config')
//const pgConnection = require ('../database/configpg')

const agregaPersonaMy = async(request,response) => {
    await myConnection.query(
        'insert into persona (nombre,apellido,direccion)values (?,?,?) returning (id,nomnre, apellido)',
        [
            request.body.nombre,
            request.body.apellido,
            request.body.direccion
        ],
        function(err,results){
            console.log(results);
        } 
    );
}

const agregarPersonaPg = async(request,response) =>{

    const res = await pgConnection.query(
    'insert into persona (nombre,apellido,direccion)values (?,?,?) returning (id,nomnre, apellido)',
[
        request.body.nombre,
        request.body.apellido,
        request.body.direccion
]
);
console.log(res)

}


const formulario = (request,response)=>{
    response.render('persona/addpersona')
    
}
module.exports = {
    agregaPersonaMy,
    agregarPersonaPg,
    formulario,
}