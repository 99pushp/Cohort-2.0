const mongoose = require('mongoose')

//connecting with the db
mongoose.connect("mongodb+srv://pu5hp:qU5ZDnDjn9wE9kSS@cluster0.l8hqvdz.mongodb.net/Todo-DB")


//defining the schema of the todo
const todoSchema = mongoose.Schema({
    'title':String,
    'description':String,
    'completed':Boolean
});

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo : todo
}