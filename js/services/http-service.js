(function (){
    'use strict';

    angular
        .module('weatherApp')
        .service('HttpService', HttpService);

        HttpService.$inject = ['$http', '$q'];

        function HttpService($http, $q) {
            var url = 'http://api.openweathermap.org/data/2.5/';
            var promise = function (method, endpoint) {
            var resource = url + endpoint;
            var config = {
                method: method,
                url: resource
            };

                return $http(config).then(function (resp) {
                    return resp;
                }, function (resp) {
                    return $q.reject(resp);
                });
            };

            var service = {
                get: get
            };

            return service;

            function get(endpoint) {
                return promise('GET', endpoint);
            }

        }


})();