var Q = require('q');
var Artist = require('./../../_core/model/artist.model');

module.exports = {

    getArtistsCategories: function(req, res) {
        var deferred = Q.defer();
        Artist.distinct('category', { 'category': { $ne: "" } })
            .exec(function(err, data) {
                if (err) {

                } else {

                }
            }).then(function(result) {
                deferred.resolve(result);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }
}
