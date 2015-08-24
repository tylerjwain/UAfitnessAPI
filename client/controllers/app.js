var app = angular.module('UAfitnessAPI', ['ui.router']);

app.controller("PartialAController", function($scope, $state)
{
	$scope.obj = {"Message" : "Welcome to Partial A"};
});

app.controller("PartialBController", function($scope, $state)
{
	$scope.obj = {"Message" : "Welcome to Partial B"};

	$scope.goToPartialA = function()
	{
		$state.go('partiala');
	}
});

app.controller("PartialCController", function($scope, $state)
{
	$scope.obj = {"Message" : "Welcome to Partial C"};
});

app.config(function($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.otherwise("home");

	$stateProvider
		.state("home", 
		{
			url: '/home',
			templateUrl: './partials/home.html'
		})

		.state("partiala", 
		{
			url: '/partiala',
			templateUrl: './partials/partiala.html',
			controller: 'PartialAController'
		})

		.state("partiala.nested",
		{
			url: "/nested",
			templateUrl: './partials/nested.html'
		})

		.state("partialb", 
		{
			url: '/partialb',
			templateUrl: './partials/partialb.html',
			controller: 'PartialBController'
		})

		.state("partialc", 
		{
			url: '/partialc',
			templateUrl: './partials/partialc.html',
			controller: 'PartialCController'
		});
		
});