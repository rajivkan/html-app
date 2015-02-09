var angularApp = angular.module("appName", ["ngRoute", 'appControllers', 'appDirectives', "appServices"]);

angularApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'template/login.html',
                controller: 'loginViewCtrl'
            })
            .when('/home', {
                templateUrl: 'template/home.html',
                controller: 'homeViewCtrl'
            })
            .when('/about1', {
                templateUrl: 'template/about.html',
                controller: 'aboutViewCtrl'
            })
            .when('/contact1', {
                templateUrl: 'template/contact.html',
                controller: 'contactViewCtrl'
            })
            .when('/student', {
                templateUrl: 'template/studentlist.html',
                controller: 'studentViewCtrl'
            })
            .when('/student/:id', {
                templateUrl: 'template/studentdetail.html',
                controller: 'studentDetailViewCtrl'
            })
           }
	]);
