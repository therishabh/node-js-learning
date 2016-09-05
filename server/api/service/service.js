var path = require('path');
var Q = require('q');
var parseXlsx = require('excel');
var Flickr = require("flickrapi"),
    flickrOptions = {
        api_key: "2fb9e85f1290cdd98114f6026cb08213",
        secret: "0f517211adedba0b",
        user_id: "143739185@N03",
        access_token: "72157671477889850-374a3233bcb19ff3",
        access_token_secret: "e120b483a3b9f5d8",
        permissions: "write"
    };

module.exports = {
    getBasePath: function() {
        var fullPath = __dirname;
        var basePath = fullPath.substring(0, fullPath.lastIndexOf("/server/"));
        return basePath;
    },

    getExcelData: function(excel_path) {
        var deferred = Q.defer();

        parseXlsx(excel_path, function(error, data) {
            if (error) {
                deferred.reject(error);
            } else {
                var count = 0;
                for (var x = 1; x < data.length; x++) {
                    if (data[x][0] != "") {
                        count++;
                    }
                }
                var result = {
                    data: data,
                    valid_count: count
                }
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    },

    getImageInfo: function(image_id) {
        var deferred = Q.defer();
        Flickr.authenticate(flickrOptions, function(error, flickr) {
            if (error) {
                deferred.reject(error);
            } else {
                flickr.photos.getInfo({
                    api_key: flickrOptions.api_key,
                    photo_id: image_id,
                    format: "json"
                }, function(err, result) {
                    deferred.resolve(result);
                });
            }
        });
        return deferred.promise;
    }
};
