const Settings = require('../models/settings.model');
const Incident = require('../models/incident.model');
const Website = require('../models/website.model');
const User = require('../models/user.model');

exports.login = function (req, res) {
    res.render('pages/login');
};

exports.website = function (req, res) {
    res.render('pages/website');
};

exports.admin = function (req, res) {
    res.render('pages/admin');
};
