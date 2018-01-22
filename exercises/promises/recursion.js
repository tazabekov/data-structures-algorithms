(function rec(n){
    return new Promise((resolve, reject)=>{
        console.log(n--);
        if (n===0){
            resolve();
        } else {
            setTimeout(function(){
                resolve(rec(n));
            }, 1000);
        }
    });
}(5));