(function() {

    'use strict';

    angular.module('getMyArtist').directive('customHeader', [function() {
        return {
            restrict: 'E',
            templateUrl: config.templateBase + 'header/header.html',
            replace: true, // Replace with the template below
            link: function(scope, element, attrs) {

                debugger;

                console.log('gg');

            }
        };
    }]);

})();
