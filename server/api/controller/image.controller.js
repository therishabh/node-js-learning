var Q = require('q');
var Image = require('./../../_core/model/artist_image');


module.exports = {

	saveData: function(req, res) {
        var deferred = Q.defer();
        var newImage = new Image(req);
        newImage.save(function(err, data) {
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
}