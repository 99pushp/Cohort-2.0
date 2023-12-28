/*
given an input array=[2,3,4,4,5]
return even value*/

 
function filter_logic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}


let input = [2,3,4,4,5];

const ans = input.filter(filter_logic);
console.log(ans);