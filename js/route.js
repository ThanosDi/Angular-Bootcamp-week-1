var routeCtrl = angular.module('routeCtrl',['ngRoute']);

routeCtrl.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/offline',{
		templateUrl:'partials/offline.html',
		controller:'offCtrl'
	}).when('/online',{
		templateUrl:'partials/online.html',
		controller:'onCtrl'
	}).otherwise({
		redirectTo:'/'
	});
}]);
