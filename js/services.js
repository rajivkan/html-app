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

            //var urlData = {url: 'http://localhost/test/test.php?name='+$("#txtNm").val()+"&email="+$("#txtPs").val(), method: "GET", crossDomain : true};
            // var urlData = {url: 'http://localhost/test/test.php', method: "POST", crossDomain : true, data: {name: "test 1", email: "email 1"}};
            // $.ajax(urlData).
            // done(function(result){
            //     //alert(result.toString());
            //     d.resolve(result);
            // }).
            // error(function(error){
            //     d.reject(error);
            // });

	        return d.promise;
    	}
	}]);