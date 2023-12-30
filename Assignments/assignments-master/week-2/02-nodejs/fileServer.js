/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const files_folder_path = '/home/pushp/Documents/Cohort 2.0/Assignments/assignments-master/week-2/02-nodejs/files/';
let arrayofValidfiles = {};



function pathchecker(str){
for(let i=0;i<arrayofValidfiles.length;i++){
  if(str == arrayofValidfiles[i])
  {
  return true;
  }
  }
return false;
}




//2.GET
app.get('/file/:fileName',(req,res)=>{

//logic if file is in directory

        let fileName = req.params.fileName;
        //console.log('filename:',fileName);
        
        if(pathchecker(fileName)){
        let filepath = path.join(files_folder_path,fileName);
        //console.log('filepath:',filepath);
        fs.readFile(filepath,'utf-8',(err,data)=>{
          res.status(200).send(data);
        })
        }
        else{
        //res.send("File not found");
        res.status(404).send("File not found");
        }
})





// 1.GET
app.get('/files',(req,res)=>{
  
  arrayofValidfiles = fs.readdirSync(files_folder_path);
  //console.log(typeof(arrayofValidfiles));
  //console.log(arrayofValidfiles);
  for(let i=0;i<arrayofValidfiles.length;i++){
  //console.log(arrayofValidfiles[i]);
  }
  res.json(fs.readdirSync(files_folder_path));//returns object
})


app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});


//starting the server
app.listen(port,function(){
  //console.log('server started at port: '+ port);
})

module.exports = app;
