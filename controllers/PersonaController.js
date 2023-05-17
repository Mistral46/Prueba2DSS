const myConnection = require ('../database/config')
const pgConnection = require ('../database/config')

const agregaPersonaMy = (request,response) => {
    myConnection.query(
        'insert into persona (nombre,apellido,direccion)values (?,?,?) returning (id,nomnre, apellido)'
        
    )


}