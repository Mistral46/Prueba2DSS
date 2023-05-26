const myConnection = require('../database/config')

const loginForm = (request,response) => {
    response.render('login')
}
const doLogin = async (request,response)=>{
    console.log(request.body)
     myConnection.query(
        `select * from users where username = "${request.body.username}"and password = "${request.body.password}"`,
        function(err, results) {
            console.log(results)
          if(results){
            response.json({message:"Login Exitoso"})
        }else{
            response.json({message:"Usuario no conocido"})
        }
     }
    );
}

module.exports ={
    loginForm, 
    doLogin,
    
}