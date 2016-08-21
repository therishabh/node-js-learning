let $ = require('jquery');
let apiEndPoint = '/api/';

module.exports = {
    getAllArtists: getAllArtists
}

function getAllArtists() {

    return new Promise(function(success, error) {

        $.ajax({
            url: apiEndPoint + '/artist/list/',
            dataType: 'json',
            success: success,
            error: error,
        })

    });
}
