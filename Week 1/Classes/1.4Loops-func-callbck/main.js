// sum of 100 numbers

let sum = 0;

for(let i=0;i<=100;i++){
    sum+=i;
}

console.log(sum);






//func to find sum of two numbers

let a=10; let b=40;

// call backs logic

function sum2 (a,b){
    return a+b;
}

console.log("The sum of numbers is:" + sum2(a,b));


//call back : passing a func as arg

function xyz (a,b,cbfn)
{
    console.log("inside xyz func:");
    return cbfn(a,b);
}

console.log(xyz(a,b,sum2));