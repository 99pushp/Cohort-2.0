// Take an array and multiply every value by 2

//[1,3,4]-->input
//[2,6,8]-->output

function transform(i){
    return i*2;
}

const input = [ 1,3,4];

const ans = input.map(transform);
console.log(ans);