var express = require('express');
var router = express.Router();

var artist = require('./artist');
router.use('/artist', artist);

var user = require('./user');
router.use('/user', user);

var city = require('./city');
router.use('/city', city);

var category = require('./category');
router.use('/category', category);

module.exports = router;
