fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user1'
    })
}).then(res => {
        return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error('ERROR')) // 404