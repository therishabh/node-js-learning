var express = require('express');
var router = express.Router();
var path = require('path');

router.use(function(req, res, next) {
    if (req.url.indexOf('?') === -1) {

        if (req.url.slice(-1) !== '/') {

            req.url = req.url + '/';
            res.redirect(301, req.url);

        } else {
            next();
        }
    } else {

        if (req.url.charAt(req.url.indexOf('?') - 1) !== '/') {

            req.url = req.url + '/';
            res.redirect(301, req.url);

        } else {
            next();
        }
    }
});

var api = require('./../../api/routes');
router.use('/api', api);

var admin = require('./../../admin/routes');
router.use('/admin', admin);

var user = require('./../../user/routes');
router.use('/', user);

router.use(function(req, res, next) {

    res.status(404);

    res.sendFile('404.html', {
        root: path.join(__dirname, '../../../www/core/pages')
    });
});

module.exports = router;
