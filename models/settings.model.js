const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SettingsSchema = new Schema({
    name: {type: String, required: true, max: 256, default: "Status Page"},
    description: {type: String, required: true, max: 1024, default: "Simple ping-based status page made with Node.js, Express & MangoDB"},
    url: {type: String, required: true, max: 512},
    info: {type: String, required: false, max: 1024},
    last_update: {type: Date, required: true, default: new Date()}
});

// Export the model
module.exports = mongoose.model('Settings', SettingsSchema);
