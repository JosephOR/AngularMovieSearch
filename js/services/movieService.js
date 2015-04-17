(function(){
	'use strict';

	angular.module("myApp")
	.factory("movieFactory", movieFactory);

  



function movieFactory($http, $q){
	
	var results = {};
	
	
	var myKey = your api key;
		

	results.getMovies = function(title){

		var defer = $q.defer();

		$http.get('https://api.themoviedb.org/3/search/movie?api_key='+myKey+'&query='+title)
		.success(function(data){
                    defer.resolve(data);
                    console.log(data)
                })
                .error(function(err, status){
                    defer.reject(err);
                });

		return defer.promise;
	}

	



results.getActors = function(name){

		var defer = $q.defer();

//http://api.themoviedb.org/3/person/287/movie_credits?api_key=1830b7145532f6f462a3a5537112416d
		// $http.get('https://api.themoviedb.org/3/search/movie?api_key=1830b7145532f6f462a3a5537112416d&query='+title)
		$http.get('http://api.themoviedb.org/3/search/person?api_key=1830b7145532f6f462a3a5537112416d&query='+name)
		.success(function(data){
                    defer.resolve(data);
                    console.log(data)
                })
                .error(function(err, status){
                    defer.reject(err);
                });

		return defer.promise;
	}

	results.getFilms = function(id){

		var defer = $q.defer();

//http://api.themoviedb.org/3/person/287/movie_credits?api_key=1830b7145532f6f462a3a5537112416d
		// $http.get('https://api.themoviedb.org/3/search/movie?api_key=1830b7145532f6f462a3a5537112416d&query='+title)
		$http.get('http://api.themoviedb.org/3/person/'+id+'/movie_credits?api_key=1830b7145532f6f462a3a5537112416d')
		.success(function(data){
                    defer.resolve(data);
                    console.log(data)
                })
                .error(function(err, status){
                    defer.reject(err);
                });

		return defer.promise;
	}

	return results;
};

	movieFactory.$inject = ['$http', '$q'];

})();