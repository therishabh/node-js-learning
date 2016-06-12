var express = require('express');
var router = express.Router();

var artist = require('./artist');
router.use('/artist', artist);

var user = require('./user');
router.use('/user', user);

module.exports = router;