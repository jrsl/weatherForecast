angular
    .module('weatherApp', ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'WeatherController',
                controllerAs: 'weather'
            })
            .when('/forecast/:city/:id',{
                templateUrl: 'partials/forecast.html',
                controller: 'ForecastController',
                controllerAs: 'forecast'
            })
            .otherwise({
                redirectTo: '/'
            })
    });