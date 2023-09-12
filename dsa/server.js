require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//app.use(cors());
app.use('/yoyo',(request, response, next)=> {
    response.send('Hello Riki');
})

app.listen(process.env.PORT, () => {console.log(`Server is running on port ${process.env.PORT}`)});