var Q = require('q');
var express = require('express');
var router = express.Router();
var Artist = require('./../../controller/artist.controller');

//  /all
//  get all artists
router.route('/:type')
    .get(function(req, res) {
        if (req.params.type === 'all') {
            var totalCount = 0;
            var data = "";
            Artist.getTotalRowsCount().then(function(result) {
                totalCount = result;
                Artist.getAllArtist().then(function(result) {
                    data = result;
                    var responseData = {
                        count: totalCount,
                        result: data
                    }
                    res.json(responseData);
                }, function(error) {
                    res.json(error);
                });
            }, function(error) {
                res.json(error);
            });
        }
    });

router.route('/')
    .get(function(req, res) {
        var page = parseInt(req.query.page) || 1;
        var limit = 10;
        var skip = (page - 1) * limit;

        if (req.query.location) {}
        if (req.query.category) {} else {
            var passData = {
                limit: limit,
                skip: skip
            }
            Artist.getTotalRowsCount().then(function(result) {
                totalCount = result;
                Artist.getArtistWithLimit(passData).then(function(result) {
                    data = result;
                    var responseData = {
                        count: totalCount,
                        next_page : page + 1,
                        result: data
                    }
                    res.json(responseData);
                }, function(error) {
                    res.json(error);
                });
            }, function(error) {
                res.json(error);
            });
        }
    });
module.exports = router;
