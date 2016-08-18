let $ = require('jquery');
let apiEndPoint = '/api/';

module.exports = {
	get: get,
	post: post
}

function get(url) {

	return new Promise(function(success, error) {

		$.ajax({
			url: apiEndPoint + url,
			dataType: 'json',
			success: success,
			error: error,
		})

	});
}


function post(url, data) {

	return new Promise(function(success, error) {

		$.ajax({
			url: url,
			dataType: 'json',
			success: success,
			error: error,
		})

	});
}
