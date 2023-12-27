const { isUtf8 } = require('buffer');
const fs =  require('fs');

fs.readFile("/home/pushp/Documents/Cohort 2.0/Assignments/assignments-master/week-2/01-async-js/easy/sample.txt",'Utf8',(err,data)=>{
    console.log(data);
});

for(let i=0;i<10000000;i++){
    //console.log('a');
}

