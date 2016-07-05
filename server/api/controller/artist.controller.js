var Q = require('q');
var Artist = require('./../../_core/model/artist.model');

module.exports = {

    saveData: function(req, res) {
        var deferred = Q.defer();
        var newArtist = new Artist(req);
        newArtist.save(function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }).then(function(result) {
            deferred.resolve(result);
        }, function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    },

    getAllArtist: function(req, res) {
        var deferred = Q.defer();
        Artist.find({ status: 1 }, { created_at: 0, updated_at: 0, status: 0, __v: 0 })
            .exec(function(err, data) {
                if (err) {
                    // console.log(err);
                } else {
                    // console.log(data);
                }
            }).then(function(result) {
                deferred.resolve(result);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    },

    getTotalRowsCount: function(req, res) {
        var deferred = Q.defer();
        Artist.count({ status: 1 })
            .exec(function(err, data) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(data)
                }
            }).then(function(result) {
                deferred.resolve(result)
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    },

    getArtistWithLimit: function(req, res) {
        var deferred = Q.defer();
        Artist.find({ status: 1 }, { created_at: 0, updated_at: 0, status: 0, __v: 0 })
            .skip(req.skip)
            .limit(req.limit)
            .exec(function(err, data) {
                if (err) {
                    // console.log(err);
                } else {
                    // console.log(data);
                }
            }).then(function(result) {
                deferred.resolve(result);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    },
}
