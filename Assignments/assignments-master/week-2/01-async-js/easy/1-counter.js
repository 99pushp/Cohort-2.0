
let n=30;
var interval = setInterval(counter,1000);

function counter(){
if(n==0){
    clearInterval(interval);
}
else{
    console.log(n);n--;
}
}

