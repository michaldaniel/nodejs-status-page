const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WebsiteSchema = new Schema({
    name: {type: String, required: true, max: 256},
    description: {type: String, required: false, max: 1024},
    url: {type: String, required: true, max: 256},
    method: { type: String, required: true, uppercase: true, enum: ['PING', 'CURL'], default: 'PING'},
    match_phrase: {type: String, required: false, max: 1024},
    status: { type: String, required: true, uppercase: true, enum: ['OUTAGE', 'OPERATIONAL', 'MAINTENANCE'], default: 'OPERATIONAL'}
});


// Export the model
module.exports = mongoose.model('Website', WebsiteSchema);
