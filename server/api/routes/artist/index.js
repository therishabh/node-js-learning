var express = require('express');
var router = express.Router();

var create = require('./artist.create');
router.use('/create', create);


var view = require('./artist.view');
router.use('/view', view);


var update = require('./artist.update');
router.use('/update', update);


var del = require('./artist.delete');
router.use('/delete', del);


module.exports = router;