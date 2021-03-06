let $ = require('jquery');
let apiEndPoint = '/api/';
let currentPage = 1;
let currentFilters = {};

let parameters = function(filters, isLoadMore) {

    if (isLoadMore) {

        currentPage += 1;
        currentFilters.page = currentPage;

    } else {

        currentPage = 1;
        if (filters) {
            filters.page = currentPage;
        } else {
            currentFilters.page = currentPage;
        }
        currentFilters = filters;

    }

    return currentFilters;

}

module.exports = {
    getArtists: getArtists,
    getMoreArtists: getMoreArtists,
    getFeaturedArtists: getFeaturedArtists
}


function getArtists(filters) {

    return new Promise(function(success, error) {

        $.ajax({
            url: apiEndPoint + 'artist/list/',
            data: parameters(filters, false),
            dataType: 'json',
            cache:true,
            success: success,
            error: error,
        })

    });
}

function getMoreArtists(filters) {

    return new Promise(function(success, error) {

        $.ajax({
            url: apiEndPoint + 'artist/list/',
            data: { page: 2 },
            dataType: 'json',
            cache:true,
            success: success,
            error: error,
        })

    });
}

function getFeaturedArtists(filters) {

    return new Promise(function(success, error) {

        $.ajax({
            url: apiEndPoint + 'artist/list/',
            data: { featured: true },
            dataType: 'json',
            cache:true,
            success: success,
            error: error,
        })

    });
}
