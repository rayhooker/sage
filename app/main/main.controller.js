wptheme.controller('Main', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('wp-json/posts/').success(function(res){
		$scope.posts = res;
	});
}]);
