var app = angular.module('login', ['ionic','login.controller','login.model'])

app.run(function($ionicPlatform) {
  	$ionicPlatform.ready(function() {
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	      	cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if(window.StatusBar) {
	      	StatusBar.styleDefault();
	    }
  	});
});

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url : '/app',
			abstract : true,
			templateUrl : 'view/app.html',
			controller : 'AppCtrl'
		})
		.state('app.dash', {
			url : '/dash',
			templateUrl : 'view/dash.html',
			controller : 'DashCtrl'
		})
		.state('app.login', {
			url : '/login',
			templateUrl : 'view/login.html',
			controller : 'LoginCtrl'
		});
	$urlRouterProvider.otherwise('app/login');
});