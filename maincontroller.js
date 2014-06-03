app.controller("MainController", function($scope) {
	$scope.searchString = "";
	$scope.messages = [ {"entryKey": "BBBBBB"}, 
						{
							"entryKey":"AAAAAAAAAFQfiwgAAAAAAAADY2AAA4dqpcTSlMySkMqCVCUrJfei_NICR5CAkg5EwjMFKJxvamyRamJsBoSGiWmGBsbGZgZgoFRbXl6ul5iYXAwAAZmu1FAAAAA=",
							"eventEntry":[
											{
												"tag":"EventStateChange",
												"contents":{
																"stateChangeMsg":"{\"auditUser\":\"hongj77@gmail.com\",\"auditAction\":\"Create\",\"auditMessage\":{\"groupName\":\"Test\"}}",
																"stateChangeTime":1401832292
															}
											}
										]
						}
	];
});