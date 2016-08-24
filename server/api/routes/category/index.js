var express = require('express');
var router = express.Router();

//return 
var list = require('./category.list');
router.use('/list',list);

module.exports = router;