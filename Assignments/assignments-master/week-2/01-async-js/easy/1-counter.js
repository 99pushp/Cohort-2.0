function counter(n){
    
        let interval = setInterval(()=>{
            for(let i=0;i<=n;i++){
        console.log(i);
        if(i===n){
            clearInterval(interval);
        }
            }
    },1000);

}

counter(2);