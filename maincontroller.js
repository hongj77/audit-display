app.controller("MainController", function($scope) {
	$scope.messages = [{name: "Jim Halpert", action: "GET", message: "I work at Dunder Mifflin."}, 
	{name: "Kevin Durant", action: "DELETE", message: "Spurs suck."}];
});