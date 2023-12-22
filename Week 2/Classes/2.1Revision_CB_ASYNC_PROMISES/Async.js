
function onDone(){
    console.log("hi there!");
}


//here think of onDone as callback for async function
setTimeout(onDone,2300)

console.log("yoo");
