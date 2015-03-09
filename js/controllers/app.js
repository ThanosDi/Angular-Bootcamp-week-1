var app = angular.module('app', []);
app.controller("AppCtrl",function($scope){
	$scope.selectedTab = -10;
$scope.users = {
		"ThanosDi": {		
			"Fullname": "Thanos Diamantidis",
			"City": "Athens",
			"E-mail":"Thanosdi@live.com",
			"Age":"29",
			"Interests": {
				"1": "Programming",
				"2": "Music",
				"3": "Games",
				"4": "Outdoor Activities"
			},
			"Profession": "Web Developer",
			"Company": "AndKo",
			"Favorite Language": "Javascript"
		},
		"Sgus": {
			"Fullname": "Kostas Sarantopoulos",
			"City": "Athens",
			"E-mail":"cybergtb@hotmail.com",
			"Age":"30",
			"Interests": {
				"1": "Programming",
				"2": "Music",
				"3": "Games",
				"4": "Outdoor Activities"
			},
			"Profession": "Web Designer",
			"Company": "E-table",
			"Favorite Language": "Javascript"
		},
		"John Doe": {
			"Fullname": "I would like to know also",
			"City": "Everywhere",
			"E-mail":"PUB@PRESTASHOP.COM",
			"Age":"45",
			"Interests": {
				"1": "Hacking",
				"2": "Placeholder",
				"3": "Prestashop"
			},
			"Profession": "Unknown",
			"Company": "Prestashop Inc.",
			"Favorite Language": "Swahili"
		},
	};

	$scope.currentUser = null;
	$scope.currentUserEdit = false;
	$scope.details = 'partials/users.html'; 
	$scope.setUser = function(user,key){
		$scope.currentUser = user;
		$scope.currentUsername = key;
	}
});

//Questions
//1)ng-repeat json order by index not alphabetical
//2)How to add class or id on ng-click,ng-change, etc
//3)On blur save json object
//4)Active class problem with variable selectedTab