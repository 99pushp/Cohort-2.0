/*
how to code is lengthy for auth & kidney logic pre check
without the use of middlewares
*/
const express = require('express');
const app = express();


app.get('/health-checkup',function(req, res){
    //do health check & kidney check here

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    // checking username & passwords
    if(username != 'harkirat' || password != 'pass'){
        res.status(400).json({"msg":"username or password not correct"});
        return;
    }
    
    // checking kidneys
    if(kidneyId != 1 && kidneyId !=2){
        res.status(400).json({"msg":"wrong kidneys id "});
        return;
    }

    //do something with kidney here
    res.json({
        msg:"your kidney input is fine"
    })

})

//starting a server
app.listen(3000,()=>{
    console.log('server started');
})