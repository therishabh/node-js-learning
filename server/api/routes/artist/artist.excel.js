var express = require('express');
var router = express.Router();
var parseXlsx = require('excel');
var Artist = require('./../../controller/artist.controller');

router.route('/')
    .get(function(req, res) {

        parseXlsx('reverb-sample.xlsx', function(err, data) {
            if (err) throw err;
            // data is an array of arrays
            for (var x = 1; x < data.length; x++) {
                var artistData = {
                    name: data[x][0],
                    description: data[x][1],
                    link: {
                    	youtube: data[x][3].split(','),
                        facebook: data[x][4],
                        twitter: data[x][5],
                        instagram: data[x][6],
                        website: data[x][7]
                    },
                    category: data[x][12].split("/"),
                    location: data[x][13].split("/")
                }
                Artist.saveData(artistData).then(function(result) {
                    res.json(result);

                }, function(error) {
                    res.json(error);

                })
            }
            // res.json(data[0][x]);
        });

    });

module.exports = router;
