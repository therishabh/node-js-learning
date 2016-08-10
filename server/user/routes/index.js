var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('user/pages/index');
});

router.get('/register/', function(req, res) {
    res.render('user/pages/index');
});

router.get('/all-artists/', function(req, res) {
    res.render('user/pages/index');
});

router.get('/post/', function(req, res) {
    res.render('user/pages/index');
});

router.get('/about-us/', function(req, res) {
    res.render('user/pages/index');
});


module.exports = router;
