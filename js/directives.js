var appDirectives = angular.module('appDirectives', []);
appDirectives.directive("login", [function(){
	return {
		restrict: "C", // E A C 
		templateUrl: "components/login.html",
		controller: "loginController"
	}
}])

appDirectives.directive("custommessage", [function(){
	return {
		restrict: "E", // E A C 
		template: "<div>{{message}}</div>"
	}
}])
