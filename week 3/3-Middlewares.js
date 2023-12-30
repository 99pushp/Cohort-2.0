//middlewares are functions
const express = require('express');
const app = express();


function middlewaresAuth(req,res,next){
// checking username & passwords
let username = req.headers.username;
   let password = req.headers.password;
   let kidneyId = req.query.kidneyId;
if(username != 'harkirat' || password != 'pass'){
    res.status(400).json({"msg":"username or password not correct"});
}
else{
    next();
}
}

function middlewarequerycheck(req,res,next){

// checking kidneyslet 
let username = req.headers.username;
   let password = req.headers.password;
   let kidneyId = req.query.kidneyId;
if(kidneyId != 1 && kidneyId !=2){
    res.status(400).json({"msg":"wrong kidneys id "});
}else{
    next();
}
}



app.get('/health-checkup',middlewaresAuth,middlewarequerycheck,(req, res)=>{
   
       res.json({
        "msg":"your kidney input is fine"
    })
})

//starting a server
app.listen(3000,()=>{
    console.log('server started');
})