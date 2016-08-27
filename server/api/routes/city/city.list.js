var Q = require('q');
var express = require('express');
var router = express.Router();
var City = require('./../../controller/city.controller');

router.route('/')
    .get(function(req, res) {
        City.getArtistsCities().then(function(result) {
            var responseData = {
            	count : result.length,
            	result : result
            }
            res.json(responseData);
        }, function(error) {
            res.json(error);
        })
    });

module.exports = router;
