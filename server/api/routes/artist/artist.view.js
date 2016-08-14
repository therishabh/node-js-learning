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
            var queryData = { query: { status: 1, is_active: 1 } };
            Artist.getTotalRowsCount(queryData).then(function(result) {
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
        var locationQuery = {};
        var categoryQuery = {};

        if (req.query.location) {
            var regexFromMyArray = new RegExp((req.query.location).split(","));
            debugger;
            var locationQuery = { location: { $in: (req.query.location).split(",") } }
        }
        if (req.query.category) {
            var categoryQuery = { category: { $in: (req.query.category).split(",") } }
        }
        var query = { $and: [{ status: 1, is_active: 1 }, locationQuery, categoryQuery] };
        
        var passData = {
            limit: limit,
            skip: skip,
            query: query
        }
        debugger;
        // Artist.getTotalRowsCount(passData).then(function(result) {
        //     totalCount = result;
        //     Artist.getArtistWithLimit(passData).then(function(result) {
        //         data = result;
        //         var responseData = {
        //             count: totalCount,
        //             next_page: page + 1,
        //             result: data
        //         }
        //         res.json(responseData);
        //     }, function(error) {
        //         res.json(error);
        //     });
        // }, function(error) {
        //     res.json(error);
        // });

    });
module.exports = router;
