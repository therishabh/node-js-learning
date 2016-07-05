var express = require('express');
var router = express.Router();
var parseXlsx = require('excel');
var Artist = require('./../../controller/artist.controller');

router.route('/')
    .get(function(req, res) {

        parseXlsx('reverb-sample.xlsx', function(err, data) {
            if (err) throw err;
            // data is an array of arrays
            // var artistData = {
            //         name: 'rishbat',
            //         "description": "hello"
            //     }
            //     Artist.saveData(artistData).then(function(result) {
            //         res.json(result);

            //     }, function(error) {
            //         res.json(error);

            //     })
            for (var x = 1; x < data.length; x++) {
                var artistData = {
                    name: data[x][0],
                    "description": data[x][1]
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
