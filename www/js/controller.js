var app = angular.module('login.controller', []);

app.controller('AppCtrl', function ($scope) {
	
});

app.controller('DashCtrl', function ($scope, $state, $ionicHistory) {
	$scope.logout = function () {
		$state.go("app.login");
		$ionicHistory.clearHistory();
	}
});

app.controller('LoginCtrl', function ($scope, $ionicPopup, AjaxServ, LoadingServ, $timeout, $state, $ionicHistory) {
	$scope.user = {
		name : "",
		password : ""
	};

	$scope.login = function (data) {
		if (data.name == "") {
			$ionicPopup.show({
			    template: 'İsmi Boş Bırakma',
			    title: 'Hata',
			    buttons: [
			      { text: 'Tamam' }
			    ]
		  	});
		}else if(data.password == ""){
			$ionicPopup.show({
			    template: 'Şifreyi Boş Bırakma',
			    title: 'Hata',
			    buttons: [
			      { text: 'Tamam' }
			    ]
		  	});
		}
		else{
			LoadingServ.show("Giriş yapılıyor",true);
			AjaxServ.login($scope.user).then(function(response) {
				response = JSON.parse(response);
				if (response) {
					LoadingServ.show("Giriş Başarılı",false);
					$timeout(function () {
						LoadingServ.hide();
						$state.go("app.dash");
						$ionicHistory.clearHistory();
					}, 1100);
				}else{
					LoadingServ.show("Giriş Olmadı",false);
					$timeout(function () {
						LoadingServ.hide();				
					}, 1000);
				}
			})
		}
	};
})