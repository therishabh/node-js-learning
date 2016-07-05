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
                var contactPersonData = [];
                var contactPersonName = data[x][8].split("/");
                var contactPersonMobile = data[x][9].split("/");
                var contactPersonEmail = data[x][10].split("/");
                var contactPersonLandline = data[x][11].split("/");

                var contactPersonLength = contactPersonName.length;
                if (contactPersonMobile.length > contactPersonLength) {
                    contactPersonLength = contactPersonMobile.length;
                }
                if (contactPersonEmail.length > contactPersonLength) {
                    contactPersonLength = contactPersonEmail.length;
                }
                if (contactPersonLandline.length > contactPersonLength) {
                    contactPersonLength = contactPersonLandline.length;
                }

                for (var y = 0; y < contactPersonLength; y++) {
                    var contactPerson = {
                        name: contactPersonName[y],
                        mobile: contactPersonMobile[y],
                        email: contactPersonEmail[y],
                        landlind: contactPersonLandline[y]
                    }
                    contactPersonData.push(contactPerson);
                }


                var artistData = {
                    name: data[x][0],
                    description: data[x][1],
                    email: data[x][2],
                    link: {
                        youtube: data[x][3].split(','),
                        facebook: data[x][4],
                        twitter: data[x][5],
                        instagram: data[x][6],
                        website: data[x][7]
                    },
                    contact: contactPersonData,
                    category: data[x][12].split("/"),
                    location: data[x][13].split("/")
                }
                Artist.saveData(artistData).then(function(result) {
                    res.json(result);

                }, function(error) {
                    res.json(error);

                })
            }
            // res.json(contactPersonData);
        });

    });

module.exports = router;
