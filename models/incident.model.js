const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status = ['OUTAGE', 'MAINTENANCE'];

let IncidentSchema = new Schema({
    start: {type: Date, required: true, default: new Date()},
    end: {type: Date, required: true, default: new Date()},
    status: { type: String, required: true, uppercase: true, enum: status, default: 'OUTAGE'},
    website: [{ type: Schema.Types.ObjectId, ref: 'Website' }]
});

// Export the model
module.exports = mongoose.model('Incident', IncidentSchema);
