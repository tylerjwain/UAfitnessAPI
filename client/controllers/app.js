var app = angular.module('UAfitnessAPI', ['ui.router']);

app.controller("PartialAController", function($scope, $state)
{
	$scope.obj = {"Message" : "Hello World"};
});
app.controller("PartialBController", function($scope, $state)
{
	$scope.obj = {"Message" : "My Message"};

	$scope.goToPartialA = function()
	{
		$state.go('partiala');
	}
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
		});
});
