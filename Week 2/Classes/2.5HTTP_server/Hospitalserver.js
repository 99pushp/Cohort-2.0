const express = require('express');
const app     = express();
app.use(express.json());
let users = [{
    name:"john",
    kidneys:[{
        healthy: false,
    }]
}];

//get request --> query data

app.get('/',(req, res)=>{
        const johnKidneys = users[0].kidneys;
        const numberOfKidneys = johnKidneys.length;
        let numberOfHealthyKidneys = 0;
        for(let i=0; i<johnKidneys.length; i++){
            if(johnKidneys[i].healthy){
                numberOfHealthyKidneys++;
            }
        }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

//put request  --> modify data
app.put('/',(req,res)=>{
    for(let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
res.json({});
})

//post request --> add new fields // data is send in body
app.post('/',(req, res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    

    res.json({
        msg:"done"
    })
})

//delete request
app.delete('/',(req,res)=>{
   const newKidneys = [];
   for(let i=0; i<users[0].kidneys.length; i++){
    if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy: true
        })
    }
   }
   users[0].kidneys = newKidneys;
   res.json({
    msg:'done'
   })
})


app.listen(3000, ()=>{
    console.log("server started on port:3000");
})