const express = require("express");
const app = express();
const router = require('./router/router')
const bodyParser = require('body-parser');
const port  = 3001

app.use(bodyParser.json())
app.use('/api/v1/tasks',router);
app.listen(port, ()=>{
    console.log(`Server is listing to port ${port}`);
})