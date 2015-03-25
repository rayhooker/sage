var wptheme = angular.module('wptheme',['ngRoute' , 'ngSanitize']);

wptheme.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

})
