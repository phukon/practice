/* Also check Promise.all and Promise.race methods */

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
/////////
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}... ..`)
        if(location === 'Google'){
            resolve('Google says hi')
        } else {
            reject('We only talk to Google :(')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject)=> {
        console.log('Processing response')
        resolve(`Extra info + ${response}`)
    })
}

makeRequest('Google').then(response=> {
    console.log('Response received')
    return processRequest(response)
}).then(processedResponse=> {
    console.log(processedResponse)
}).catch(error=>{
    console.log(error)
})