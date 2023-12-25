const { log } = require('console');
const express = require('express');
const app = express();


function multiplyNumbers(n){
    return n*n;
}

app.get('/',(req,res)=>{
    const n = req.query.n;
    let ans = multiplyNumbers(n);
    res.send("multiplied ans: " + ans);
})
// request structure : http://127.0.0.1:3000/?n=90

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})