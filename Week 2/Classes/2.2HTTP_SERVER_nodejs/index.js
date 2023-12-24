//npm init -y 
// npm install express
//for package.json

const express = require('express'); //express in on internet
const app = express(); //express function will get u object

app.get('/', (req, res) => {   //call back function
  //do something
  res.send('Hello, Worldd!'); //send something
});

//send headers as in body 
app.post('/conversation', (req, res)=>{
  console.log(req.headers);
  console.log(req.body);
  res.send({
    msg: "2 + 2 =4"
  })
})

app.listen(3000, () => { //start server
  console.log('Server listening on port 3000');
});