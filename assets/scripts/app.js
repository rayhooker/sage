var wptheme = angular.module('wptheme',['ngRoute' , 'ngSanitize']);

wptheme.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

})

wptheme.controller('Content', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('wp-json/posts/' + $routeParams.ID).success(function(res){
		$scope.post = res;
	});
}]);

wptheme.config([ '$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	     $routeProvider
           .when('/:ID', {
 		          templateUrl: myLocalized.ngapp+ 'content/content.html',
 		            controller: 'Content'
 	             });
}]);

wptheme.controller('Main', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('wp-json/posts/').success(function(res){
		$scope.posts = res;
	});
}]);

wptheme.config([ '$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	     $routeProvider
	       .when('/', {
		         templateUrl: myLocalized.ngapp + 'main/main.html',
		           controller: 'Main'
             });
}]);
