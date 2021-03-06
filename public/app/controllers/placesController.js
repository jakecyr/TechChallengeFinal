angular
	.module('mainApp')
	.controller('placesController', placesController);

placesController.$inject = ['$scope', '$location', 'PlaceFactory'];

function placesController($scope, $location, PlaceFactory){

	$scope.showDirections = showDirections;

	///////////

	// show the directions page
	function showDirections(place){
		$scope.$parent.destination = place.town_city + ', ' + place.st + ' ' + place.tel;
		$location.path('/directions');
	}
}