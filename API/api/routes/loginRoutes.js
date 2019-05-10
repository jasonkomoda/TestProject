var express = require('express');
var router = express.Router();
var login = require('../controllers/loginController');

router.post('/', login.verify_credentials);

module.exports = router;