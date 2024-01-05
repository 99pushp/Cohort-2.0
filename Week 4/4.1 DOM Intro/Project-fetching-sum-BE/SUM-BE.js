const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Replace with your client's origin
    methods: 'GET',  // Specify the HTTP methods allowed
    optionsSuccessStatus: 200
}));
app.get('/',(req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    let sum = parseInt(a)+parseInt(b);
    res.send((`${sum}`));
    return;
})


//starting the server
app.listen(3000,()=>{
    console.log('Sum server started at port 3000');
})