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