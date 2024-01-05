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

async function doWork() {   
    try {
        const response = await makeRequest('Fuck')
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch(error) {
        console.log(error)
    }
}

doWork()
