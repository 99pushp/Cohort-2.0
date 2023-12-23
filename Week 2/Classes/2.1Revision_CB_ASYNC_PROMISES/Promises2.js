const { log } = require('async');
const { isUtf8 } = require('buffer');
const { error } = require('console');
const fs = require('fs');

function kiratAsyncFunction(){
    
    let p = new Promise(function(resolve) {
        //do some async here
        let data = fs.readFileSync('a.txt','utf-8');

        resolve(data); //1;         when data is completely read then .then is called
        //inside the executor function, when your asynchronous operation is successful, 
        //you call the resolve function. This informs the promise that 
        //the operation has completed successfully, and the promise transitions to the fulfilled state.
        
    });
    console.log(p);
    console.log('before p');
    return p; //3
  
}

function main(){
    
    const return_promise = kiratAsyncFunction();
    return_promise.then(function(value){
        console.log(value);
    })
    
}

main();