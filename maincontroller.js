app.controller("MainController", function($scope) {

	$scope.selectedElement = "All";
	$scope.searchString = "";
	$scope.things = [
		"All",
		"Name", 
		"Message",
		"Action"
	];

	$scope.messages = [
		{
			name: "Jim Halpert", 
			action: "GET", 
			message: "adsfasdfasdfasdfasdfasdfasdf"
		},

		{
			name: "Kevin Durant", 
			action: "DELETE", 
			message: "asdfasdfaasasdsdfsadasdsaddsasfsadfsadfs"
		},

		{
			name: "Ibaka", 
			action: "DELETE", 
			message: "asdfasdfaasasdsdfsadasdsaddsasfsadfsadfs"
		},

		{
			name: "Russell westBrook", 
			action: "POST", 
			message: "asdfasdfaasasdsdfsadasdsaddsasfsadfsadfs"
		},

		{
			name: "steven adams", 
			action: "DELETE", 
			message: "asdfasdfaasasdsdfsadasdsaddsasfsadfsadfs"
		},

		{
			name: "Derick Fisher's biceps", 
			action: "GET", 
			message: "asdfasdfaasasdsdfsadasdsaddsasfsadfsadfs"
		}
	];

	//search filter
	app.filter('searchFor', function() {
		return function (array, searchString) {

			if (!searchString || arr.length <= 1)
				return arr;

			searchString = searchString.toLowerCase();
			var resultArr = []
			var whereSearch = selectedElement;

			for (i = 0; i < arr.length; i++) {
				var currentValue = arr[i].whereSearch.toLowerCase;

				if (currentValue.indexOf(searchString) !== -1)
					resultArr.push(arr[i]);
			}

			return resultArr;
		};
	});

});