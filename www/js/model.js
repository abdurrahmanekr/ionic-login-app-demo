var app = angular.module('login.model', []);

app.service('AjaxServ', function ($http, $httpParamSerializerJQLike) {
	var result = function (data) {

		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		var promise = $http.post("http://localhost/http/index.php", $httpParamSerializerJQLike(data)).then(function (response) {
			return response.data;
		} , function (response) {
			return false;
		})

		return promise;
	};

	return {
		login : result
	};
});

app.service('LoadingServ',function ($ionicLoading) {
	return{
		show : function(e,w) {
			w = (w == true) ? '<ion-spinner icon="lines"/>' : '';
		  	$ionicLoading.show({
			    template: '<p>'+e+'</p>'+w,
			    animation: 'fade-in',
			    transclude: true,
    			replace: true,
			    showBackdrop: true,
			    maxWidth: 200,
			    showDelay: 0
		  	});
		},
		hide : function () {
			$ionicLoading.hide();
		}

	}
})