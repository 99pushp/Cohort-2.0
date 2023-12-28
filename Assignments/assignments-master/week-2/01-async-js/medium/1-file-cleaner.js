const fs = require('fs');

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


function readfile(){

    let p = new Promise(function(resolve,reject){

        fs.readFile('sample1.txt','utf-8',(err,data)=>{
        let newData = remove_spaces(data);

        fs.writeFile('sample1.txt', newData, 'utf8', (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("written to file");
            }
        })
            resolve("done!");
        })
        
})
return p;  
}

function main (){
    
    let resolvedp = readfile();
    resolvedp.then((value)=>{
        console.log(value);
        

    })
    }

main();



