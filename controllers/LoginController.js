const myConnection = require('../database/config')


const loginForm = (request,response) => {
    response.render('login')
}
const doLogin = async (request,response)=>{
     myConnection.query(
        `select * from users where username = "${request.body.username}"
         and password = "${request.body.password}"`,
        function(err, results) {
          if(results){
            response.json({message:"Login Exitoso"})
        }else{
            response.json({message:"Usuario no conocido"})
        }
     }
    );
}
const doLoginpg = async (request,response) =>{
    const res = await pool.query(
        `select * from users where username ="${request.body.username}"
        and password ="${request.body.password}"`,
    );
    console.log(res)
}



module.exports ={
    loginForm, 
    doLogin,
    doLoginpg
}