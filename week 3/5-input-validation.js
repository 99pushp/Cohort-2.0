
const express = require('express');
const app = express();


//this middleware extracts the body

app.use(express.json());
app.post('/health-checkup', function(req,res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
//{
  //  "kidneys":[1,2]  send this in body in postman
//}
    res.send('you have'+ kidneyLength + "kidneys");
});

//global catch are the middleware which will be called when there is an exception is thrown

//error handling middleware
app.use(function(err, req, res, next){
    res.json({
        msg:"Sorry somethig has came up(exception)"
    })
})




app.listen(3000,()=>{
    console.log('server started at port 3000');
})