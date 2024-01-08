// the function of this file is have an admin middleware for granting access

const {Admin} = require('../db/index')   //importing from DB
//connection to DB to check and verify if the admin is present or not

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;        //harkirat@gmail.com
    const password = req.headers.password;        //40392
    
    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:'Admin not present or your password/username is incorrect'
            })
        }
    })



}

module.exports = adminMiddleware;