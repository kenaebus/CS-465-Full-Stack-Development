const mongoose = require('mongoose');

// Define the Trip Schema
const tripSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true},
    name: {type: String, required: true, index: true},
    length: {type: String, required: true},
    start: {type: Date, required: true},
    resort: {type: String, required: true},
    perPerson: {type: String, required: true},
    image: {type: String, require: true},
    description: {type: String, required: true}
});

const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;