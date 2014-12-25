Angular simple front-end apps using ngRoute

Angularjs is very flexible for Single Page Application(SPA). This post explains you that how we can perform navigating between one view to another view using ngRoute module and Bootstrap for layouts. Please go to this post If you are intersted this demo using ui-router module.

Source: https://code.angularjs.org/1.3.2/angular-route.min.js

Dependent Module: ngRoute

Router Provider: $routeProvider

Default View Config: $routeProvider.otherwise({redirectTo: '/home'});

Router Config: 
	$routeProvider.when('/home', {
		templateUrl: 'home.html'
	});


View Directive: ng-view

Templates: Used In-line templates home.html, projects.html..etc., (Refer code)

Link Directive : href="#/home"  (use html href directly)