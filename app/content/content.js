wptheme.config([ '$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	     $routeProvider
           .when('/:ID', {
 		          templateUrl: myLocalized.ngapp+ 'content/content.html',
 		            controller: 'Content'
 	             });
}]);
