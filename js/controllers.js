var appControllers = angular.module('appControllers', []);

appControllers.controller("loginViewCtrl", ["$scope", function($scope){
	$("#navSection").hide();
}]);

appControllers.controller("homeViewCtrl", ["$scope","$location", function($scope, $location){
	$("#navSection").show();
	$scope.message = "Welcome to Angular Js";
}])

appControllers.controller("aboutViewCtrl", ["$scope", function($scope){
	$("#navSection").show();
	$scope.message = "About message";
}]);

appControllers.controller("contactViewCtrl", ["$scope", function($scope){
	$("#navSection").show();
	$scope.message = "Contact message";
}]);

var studentList = [];
appControllers.controller("studentViewCtrl", ["$scope", "$http", function($scope, $http){
	$("#navSection").show();
	$scope.message = "";
	$http.get("data/data.json")
	.success(function(result){
		$scope.message = "Student data loaded successfully.";
		$scope.students = result.student;
		studentList = result.student;
	})
	.error(function(err){
		$scope.message = "Unable to load student record(s). Please try again.";
	});
}]);

appControllers.controller("studentDetailViewCtrl", ["$scope", "$routeParams", function($scope, $routeParams){
	$("#navSection").show();
	for(var i = 0; i < studentList.length; i++){
		if(studentList[i].studentId == $routeParams.id){
			$scope.student = studentList[i];
			break;
		}
	}
}]);

appControllers.controller("loginController", ["$scope", function($scope){
	$scope.usernamePlaceHolder = "Enter Username";
	$scope.passwordPlaceHolder = "Enter Password";
	$scope.username = "";
	$scope.password = "";
	$scope.login = function(){
		if($scope.username == "admin" && $scope.password == "password"){
			window.location.href = "#/home";
		}
		else{
			alert("Username and Password is invalid.");
		}
	}
}]);

appControllers.controller("navController", ["$scope", "$route", function($scope, $route){
	$scope.navLinks = false;
}]);