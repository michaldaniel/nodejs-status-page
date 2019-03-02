const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status = ['OUTAGE', 'OPERATIONAL', 'MAINTENANCE'];

let WebsiteSchema = new Schema({
    name: {type: String, required: true, max: 256},
    description: {type: String, required: false, max: 1024},
    url: {type: String, required: true, max: 512},
    status: { type: String, required: true, uppercase: true, enum: status, default: 'OPERATIONAL'},
    info: {type: String, required: false, max: 1024},
    last_outage: {type: Date, required: false},
    last_maintenance: {type: Date, required: false},
    incidents: [{ type: Schema.Types.ObjectId, ref: 'Incident' }]
});


// Export the model
module.exports = mongoose.model('Website', WebsiteSchema);
