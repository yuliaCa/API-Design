const express = require("express");
const { then } = require("./connection.js");
const app = express();

const connected = require("./connection.js");

connected
    .then(() => {
        console.log("connected!");
        const server = app.listen(8080, () => console.log("Listening"));
    });