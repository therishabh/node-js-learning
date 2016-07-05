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
    }

}
