(function(){
    'use strict';

    angular
        .module('weatherApp')
        .controller('WeatherController', WeatherController);

        WeatherController.$inject = ['$location', 'APIService'];

        function WeatherController($location, APIService){
            var vm = this;
            vm.search = '';
            vm.goToForecast = goToForecast;
            vm.error = false;

            APIService.getCities().then(function(resp) {
                loadData(resp);
            }, function(resp) {
                vm.error = true;
            });

            function loadData(response) {
                var data = response.data;
                vm.data = data;
                vm.cityList = data.list;
            }

            function goToForecast(cityName, cityId) {
                $location.path('/forecast/' + cityName + '/' + cityId);
            }

        }
})();