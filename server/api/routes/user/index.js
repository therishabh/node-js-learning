var express = require('express');
var router = express.Router();

var create = require('./user.create');
router.use('/create', create);


var view = require('./user.view');
router.use('/view', view);


var update = require('./user.update');
router.use('/update', update);


var del = require('./user.delete');
router.use('/delete', del);


module.exports = router;