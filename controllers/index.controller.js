const Settings = require('../models/settings.model');
const Incident = require('../models/incident.model');
const Website = require('../models/website.model');

exports.run = function (req, res) {
    res.render('pages/index');
};
