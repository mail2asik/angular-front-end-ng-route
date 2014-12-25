'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

	$routeProvider.otherwise({redirectTo: '/home'});

	$routeProvider.when('/home', {
		templateUrl: 'home.html'
	});
	
	$routeProvider.when('/projects', {
		templateUrl: 'projects.html'
	});
	
	$routeProvider.when('/services', {
		templateUrl: 'services.html'
	});
	
	$routeProvider.when('/downloads', {
		templateUrl: 'downloads.html'
	});
	
	$routeProvider.when('/about', {
		templateUrl: 'about.html'
	});
	
	$routeProvider.when('/contact', {
		templateUrl: 'contact.html'
	});
  
}]);