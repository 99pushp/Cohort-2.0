/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise(function(resolve){
        //async
        setTimeout(()=>{

            //console.log("this is promisified setTimeout that ran after"+ n +" secs");
            resolve();
        
        }, n*1000);
    })
    return p;
}
/*
function main(){
    let resolvedPromise = wait(5);
    resolvedPromise.then((value)=>{
        console.log(value);
    })
}
main();*/
module.exports = wait;
