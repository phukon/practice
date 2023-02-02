let p = new Promise((resolve, reject) => { // this promise object takes a function as a parameter
    let a = 1+1;
    if( a==2){
        resolve('success');
    }
    else{
        reject('failed');
    }
})

p.then((message) => {
    console.log(`This is in the 'then' ${message}`);
}).catch((message) => {
    console.log(`This is in the 'catch' ${message}`);
})