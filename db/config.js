const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongooge.connect(process.env.CONNECTION_STRING);
