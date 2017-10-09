(function (){
    'use strict';

    angular
        .module('weatherApp')
        .service('APIService', APIService);

        APIService.$inject = ['HttpService'];

        function APIService(HttpService) {
            var cities = 'group?id=2759794,2643743,3117735,2800866,2950159&units=metric&appid=3cb197df907967913333b60b3968c987';

            var service = {
                getCities: getCities,
                getCityWeather: getCityWeather
            };

            return service;

            function getCities() {
                return HttpService.get(cities);
            }

            function getCityWeather(cityId) {
                return HttpService.get('forecast?id=' + cityId + '&units=metric&appid=3cb197df907967913333b60b3968c987');
            }

        }


})();