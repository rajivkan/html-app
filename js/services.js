var appService = angular.module('appServices', []);
appService.service('service', ['$http', '$q', '$filter', function($http, $q, $filter) {
	    //var endPoint = "localhost:8282/"+url; 
    	this.retrieve = function(url, methodType) {
        	var d = $q.defer();
        	var req = {
             method: methodType,
             url: url,
             contentType: "application/json; charset=utf-8",
             dataType: 'json'
            }

	        $http(req).success(
            function(data) {
                d.resolve(data);
            }).
            error(function(error) {
                d.reject(error);
            });
	        return d.promise;
    	}
	}]);