



const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//defining the list
let todoList = [];
//defining the todo structure
let todo = {
"id":Number,
"title":String,
"description":String
}
let todo1 = {
id : 0,
title: 'buy something',
description:"ice screan"
}

let todo2={
id : 1,
title: 'buy something2',
description:"ice screan2"
}

todoList.push(todo1);todoList.push(todo2);

app.delete("/todos/:id",(req,res)=>{
    const todoIndex = todoList.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todoList.splice(todoIndex, 1);
      res.status(200).send();
    }
})
app.put("/todos/:id",(req,res)=>{

    let id = req.params.id;
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].id==id){
            todoList[i].title = req.body.title;
            todoList[i].completed  = req.body.completed;
            res.status(200).json(todoList[i]);
            return;
        }
    }
    res.status(404).json({
        'msg':'not found'
    });
    return;
    
})


app.post('/todos',(req,res)=>{


    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let completed = req.body.completed;
    let obj = {
    }
    obj.id = id;
    obj.title=title;
    obj.completed = false;
    obj.description=description;


    todoList.push(obj);

    res.status(201).json({
        'id':obj.id
    })
    return;

})


app.get('/todos',function(req,res){
res.status(200).json(todoList);
})

app.get('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(id>=0 && id<=todoList.length-1){
        res.status(200).json(todoList[id]);
    }
    else {
        res.status(404).json({ error: 'Todo not found' });
    }
    // Add a return statement to ensure proper function exit
    return;
})


//starting the server
app.listen(3000,()=>{
console.log("server started");
})
module.exports = app;