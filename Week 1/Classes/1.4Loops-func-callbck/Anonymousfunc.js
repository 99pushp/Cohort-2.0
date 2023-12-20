
function square(n){
    return n*n;
}

function f1 (callback,n){
    return callback(n);
}

//console.log(f1(function cube(n){return n*n*n;},10));
console.log(f1(function(n){return n*n*n;},10));

console.log(f1(square,2));