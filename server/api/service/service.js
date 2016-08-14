var path = require('path');
var Q = require('q');
var parseXlsx = require('excel');

module.exports = {
    getBasePath: function() {
        var fullPath = __dirname;
        var basePath = fullPath.substring(0, fullPath.lastIndexOf("/server/"));
        return basePath;
    },

    getExcelData: function(excel_path) {
        var deferred = Q.defer();

        parseXlsx(excel_path, function(error, data) {
        	if(error){
        		deferred.reject(error);
        	}else{
                var count = 0;
                for (var x = 1; x < data.length; x++){
                    if(data[x][0] != ""){
                        count++;
                    }
                }
                var result = {
                    data : data,
                    valid_count : count
                }
            	deferred.resolve(result);
        	}
        });
        return deferred.promise;
    }
};
