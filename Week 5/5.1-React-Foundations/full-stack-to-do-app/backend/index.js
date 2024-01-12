const express = require('express'); 
const app = express();
const { createTodo, updateTodo } = require('./types');
const {todo} = require("./db");
//json body parser middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());
//expected input 
/**{
 * title:tile1
 * description:description1
 * } */




//routes

//getting all the todos
app.get('/todos',(req,res)=>{
    const todos = todo.find({});
    todos.then((value)=>{
        
        res.json({
            'todos':value
        })
    })
    
})

//creating todo
app.post('/todos',(req,res)=>{

    const createPayload = req.body;
    //create payload takes title and description from the request body
    const parsePayload = createTodo.safeParse(createPayload);
    //parse payload 
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you entered wrong inputs"
        })
        return;
    }
//logic for putting wup in db

//The .then keyword is used to ensure that the database operation completes before moving on to the next line of code
     todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : createPayload.completed
    }).then(()=>{
        res.json({
            msg:"todo created"
        })
    })

});



//marking todo complete
app.put('/completed',(req,res)=>{
   const createPayload = req.body;
   const parsePayload = updateTodo.safeParse(createPayload);
   if(!parsePayload.success){
    res.status(411).json({
        msg:"you entered wrong inputs"
    })
    return;
   }

   //update in db
   todo.updateOne(
    { _id: req.body.id },
    { $set: { completed: true } }
  )
    .then(() => {
      res.json({
        msg: 'Todo updated'
      });
    })
})

//server started 
app.listen(3000,()=>{
    console.log("server started at port 3000");
})