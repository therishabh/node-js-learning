var Q = require('q');
var express = require('express');
var router = express.Router();
var Category = require('./../../controller/category.controller');

router.route('/')
    .get(function(req, res) {
        Category.getArtistsCategories().then(function(result) {
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
