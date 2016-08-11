var express = require('express');
var router = express.Router();
var Q = require('q');
var Artist = require('./../../controller/artist.controller');
var pathService = require('./../../service/service');
var Artist = require('./../../../_core/model/artist.model');
var Flickr = require("flickrapi"),
    flickrOptions = {
        api_key: "e8598a898e309654886307541f7a15e4",
        secret: "e955aee9df42ca2d",
        user_id: "145725359@N08",
        access_token: "72157671092113111-6fa0bb35979ca135",
        access_token_secret: "d06d87105a2a77e9",
        permissions: "write"
    };


router.route('/')
    .get(function(req, res) {
        var base_url = pathService.getBasePath();

        Flickr.authenticate(flickrOptions, function(error, flickr) {
            if (error) {
                return console.error(error);
            } else {
                pathService.getExcelData('reverb-sample.xlsx').then(function(result) {
                    var users_data = result.data;
                    var valid_count = result.valid_count;
                    var artist_id = 1001;
                    var count = 0;
                    var allData = [];
                    for (var x = 1; x < users_data.length; x++) {
                        if (users_data[x][0] != "") {
                            (function(x) {
                                
                                //get contact Person Data.
                                var contactPersonData = [];
                                var contactPersonName = users_data[x][8].split("/");
                                var contactPersonMobile = users_data[x][9].split("/");
                                var contactPersonEmail = users_data[x][10].split("/");
                                var contactPersonLandline = users_data[x][11].split("/");

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

                                // //image upload section..
                                var artist_image = [];
                                var artistImages = users_data[x][14].split(",");

                                var flickr_image_object = []
                                for (var imageint = 0; imageint < artistImages.length; imageint++) {
                                    var image_name = artistImages[imageint];
                                    var artist_image_absolute_path = base_url + "/artist-images/" + image_name;
                                    var flickr_obj = {
                                        title: users_data[x][0],
                                        tags: users_data[x][12].split("/"),
                                        photo: artist_image_absolute_path
                                    }
                                    flickr_image_object.push(flickr_obj);
                                }
                                var uploadOptions = {
                                    photos: flickr_image_object
                                };

                                Flickr.upload(uploadOptions, flickrOptions, function(err, result) {

                                    if (err) {
                                        return console.error(err);
                                    } else {
                                        count++;
                                        // console.log("Image Successfully Uploaded", result);
                                        for (var abc = 0; abc < result.length; abc++) {
                                            artist_image.push(result[abc]);
                                        }
                                        var artistData = {
                                            artist_id: artist_id,
                                            name: users_data[x][0],
                                            description: users_data[x][1],
                                            email: users_data[x][2],
                                            link: {
                                                youtube: users_data[x][3].split(','),
                                                facebook: users_data[x][4],
                                                twitter: users_data[x][5],
                                                instagram: users_data[x][6],
                                                website: users_data[x][7]
                                            },
                                            contact: contactPersonData,
                                            category: users_data[x][12].split("/"),
                                            location: users_data[x][13].split("/"),
                                            image: artist_image,
                                        }
                                        allData.push(artistData);
                                        var newArtist = new Artist(artistData);
                                        newArtist.save();
                                        artist_id++;

                                        if(count === valid_count){
                                            res.json(allData);
                                        }
                                    }
                                });
                            })(x);
                        }

                    }; // avoid the closure loop problem

                }, function(error) {
                    console.log("excel error", error);
                });
            }
        });

    });

module.exports = router;
