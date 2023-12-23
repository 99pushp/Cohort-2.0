function kiratAsyncFunction(){
    
    let p = new Promise(function(resolve) {
        //do some async here
        setTimeout(function () { //2
            console.log("set timeout async func has printed this:");
        },1000)

        resolve("data is here!!!"); //1
    });
    
    return p; //3
}

function main(){

    kiratAsyncFunction().then(function(value){

        console.log(value);
    })
    
}

main();