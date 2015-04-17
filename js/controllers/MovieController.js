


(function(){
	'use strict';

	angular.module('myApp')
	.controller("movieController", movieController);

	function movieController(movieFactory, $scope){
		
		$scope.movies = {};
		$scope.actors = {};
		$scope.films = {};

		

		$scope.getMovies=function(){
			
			movieFactory.getMovies($scope.filmName)
			.then(function(data){
				$scope.movies = data;
				$scope.actors = {}
				$scope.films = {}
				console.log($scope.movies)
			}, function(error){
				$scope.movies = {}
			});
			
		};

		$scope.getActors=function(){
			
			movieFactory.getActors($scope.Name)
			.then(function(data){
				console.log(data);
				$scope.actors = data;
				$scope.movies = {}
				$scope.films = {}
			}, function(error){
				$scope.actors = {}
			});
			
		};

		$scope.getFilms=function(id){
			
			movieFactory.getFilms(id)
			.then(function(data){
				console.log(data);
				$scope.films = data;
				$scope.movies = {}
				$scope.actors = {}
			}, function(error){
				$scope.films = {}
			});
			
		};
		
		
		
	};



movieController.$inject = ['movieFactory', '$scope'];

})()