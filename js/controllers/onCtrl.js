var onCtrl = angular.module('onCtrl',[]);

onCtrl.controller('onCtrl', function($scope,$http) {
	$http.get('http://jsonplaceholder.typicode.com/posts').success(function(data, status, headers, config) {
		$scope.users = data;
		console.log($scope.users);
	});
	$scope.currentUser = null;
	$scope.currentUserEdit = false;
	$scope.setUser = function(user,key){
		$scope.currentUser = user;
		$scope.currentUsername = key;
	}
});