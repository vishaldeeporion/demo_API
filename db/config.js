const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.CONNECTION_STRING);
try {
    console.log("db is connected");
} catch (error) {
    console.log(`mongodb connection is failed: ${error}`);
};
