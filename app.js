const express = require("express");
const { then } = require("./connection.js");
const app = express();

const connected = require("./connection.js");
app.use(express.json());

connected
    .then(() => {
        console.log("connected!");
        const server = app.listen(8080, () => console.log("Listening"));
    });
    
app.get('/',(req,res)=>{
    res.send('testing');
})


const router = require('./routes/index');
app.use('/api/v1/', router);