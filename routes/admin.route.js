const express = require('express');
const router = express.Router();

const admin_controller = require('../controllers/admin.controller');

router.get('/login', admin_controller.login);
router.get('/', admin_controller.admin);
router.get('/website', admin_controller.website);

module.exports = router;
