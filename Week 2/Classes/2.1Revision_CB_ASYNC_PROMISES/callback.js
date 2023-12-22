function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

//callbacks
function sumOfsomething(fn,a,b){
       return fn(a)+fn(b);
}


let ans = sumOfsomething(square,2,3);
console.log(ans);




