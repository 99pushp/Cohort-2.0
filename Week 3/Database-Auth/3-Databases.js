const express = require('express')

const mongoose = require('mongoose')
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://pu5hp:<password>@cluster0.l8hqvdz.mongodb.net/user_app')

const User =  mongoose.model('Users',{name: String, email:String, password:String});

app.post('/signup',async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email : username});

    if(existingUser){
        return res.status(400).send("username already exists");
    }

    const User = new User({
        name:name,
        email:username,
        password:password
    });

    username.save();
    res.json({
        "msg":"User created successfully"
    })

})