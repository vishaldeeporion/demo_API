const mongoose = require('mongoose');

const demoSchema = mongoose.Schema({},
{ strict: false }
);

module.exports = mongoose.model("demo", demoSchema);