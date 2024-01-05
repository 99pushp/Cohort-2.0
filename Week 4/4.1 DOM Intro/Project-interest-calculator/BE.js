const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Replace with your client's origin
    methods: 'GET',  // Specify the HTTP methods allowed
    optionsSuccessStatus: 200
}));
app.get('/',(req,res)=>{
    let p = parseInt(req.query.p);
    let r = parseInt(req.query.r);
    let t = parseInt(req.query.t);
    let SI = (p*r*t)/100;

    res.status(200).send(SI.toString());
})


app.listen(3000,()=>{
    console.log('app started at part 3000');
})

