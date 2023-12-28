


//let str = "hello     world    my    name   is       raman";

function remove_spaces(str){

let newStrArr = str.split(' ');
let words=[];

for(let i=0;i<newStrArr.length;i++){
    if(newStrArr[i]!= ''){
        words.push(newStrArr[i]);
    }
}
let ans =words.join(' ');
return ans;

}

console.log(remove_spaces("hello     world    my    name   is       raman"));