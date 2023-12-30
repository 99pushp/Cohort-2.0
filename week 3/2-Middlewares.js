//function calling from other functions in express routes

const express = require("express")
const app = express();


app.get('/',function(req,res,next){
console.log('inside f1');
next();
},function(req,res,next){
console.log('inside f2');
next();
},function(req,res){
console.log('inside f3');
res.send('in f3')
})


app.listen(3000,()=>{
    console.log('server started!');
})