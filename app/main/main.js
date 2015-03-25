wptheme.config([ '$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	     $routeProvider
	       .when('/', {
		         templateUrl: myLocalized.ngapp + 'main/main.html',
		           controller: 'Main'
             });
}]);
