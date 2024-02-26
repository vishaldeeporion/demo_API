const express = require('express');
const dotenv = require('dotenv').config();
require("./db/config");

const app = express();

const port = process.env.PORT;



app.listen(port, ()=> {
    console.log("Server is running on port 5000");
});