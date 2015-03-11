var offCtrl = angular.module('offCtrl',[]);

offCtrl.controller('offCtrl',function($scope,$http){
	$http.get('partials/data.json').success(function(data, status, headers, config) {
		$scope.users = data;
	});
	// $scope.sort="name";
	$scope.currentUser = null;
	$scope.currentUserEdit = false;
	$scope.setUser = function(user,key){
		$scope.currentUser = user;
		$scope.currentUsername = key;
	}

});