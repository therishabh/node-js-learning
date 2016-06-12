var express = require('express');
var router = express.Router();

var homeRouter = require('./home');
router.use('/', homeRouter);

var userRouter = require('./user');
router.use('/user', userRouter);

module.exports = router;