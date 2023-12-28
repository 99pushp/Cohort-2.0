




function clock(){
    let date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();

console.log(hh+":"+mm+":"+ss);

}

setInterval(() => {
    clock();
}, 1000);