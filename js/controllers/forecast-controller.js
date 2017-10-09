(function(){
    'use strict';

    angular
        .module('weatherApp')
        .controller('ForecastController', ForecastController);

        ForecastController.$inject = ['APIService', '$routeParams'];

        function ForecastController(APIService, $routeParams){
            var vm = this;
            var cityId = $routeParams.id;
            vm.cityName = $routeParams.city;
            vm.error = false;

            APIService.getCityWeather(cityId).then(function (resp) {
                loadData(resp);
            }, function (resp){
                vm.error = true;
            });

            function loadData(response){
                vm.data = response.data;
                vm.forecastList = vm.data.list;
            };
        }
})();