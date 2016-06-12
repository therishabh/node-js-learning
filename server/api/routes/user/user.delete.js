var Q = require('q');
var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res) {

        User.getAllUsers().then(function(result) {
            // console.log(result);
            var data = {
            	userList : result
            }
            console.log(data);
        	res.render('index', data);
        }, function(error) {
            // console.log(error);
        });
    });

module.exports = router;
