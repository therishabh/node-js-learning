var express = require('express');
var router = express.Router();

var list = require('./city.list');
router.use('/list',list);

module.exports = router;