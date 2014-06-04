app.controller("MainController", function($scope) {
	$scope.searchString = "";
	$scope.parsedMessages = [];
	$scope.messages = [
						{
							"entryKey":"AAAAAAAAA",
							"eventEntry":[
											{
												"tag":"EventStateChange",
												"contents":{
																"stateChangeMsg":"{\"auditUser\":\"hongj77@gmail.com\",\"auditAction\":\"Create\",\"auditMessage\":{\"groupName\":\"Test\"}}",
																"stateChangeTime":1401832292
															}
											}
										]
						}, 

						{
							"entryKey":"BccccBBBBBB",
							"eventEntry":[
											{
												"tag":"EventStateChange",
												"contents":{
																"stateChangeMsg":"{\"auditUser\":\"hacker1234@gmail.com\",\"auditAction\":\"Delete\",\"auditMessage\":{\"groupName\":\"Admin\"}}",
																"stateChangeTime":1123132292
															}
											}
										]
						},

						{
							"entryKey":"",
							"eventEntry":[
											{
												"tag":"EventStateChange",
												"contents":{
																"stateChangeMsg":"{\"auditUser\":\"hacker1234@gmail.com\",\"auditAction\":\"Delete\",\"auditMessage\":{\"groupName\":\"Admin\"}}",
																"stateChangeTime":1121233132292
															}
											}
										]
						}
	];

	_.each($scope.messages, function (msg) {

		var parsed = JSON.parse(msg.eventEntry[0].contents.stateChangeMsg);

		var makeMessageArray = function (stringMsg) {
			var result = [];
			var inside = {};
			var inside2 = {};
			inside.title = "Entry Key";
			inside.value = msg.entryKey;
			inside2.title = "Time";
			inside2.value = msg.eventEntry[0].contents.stateChangeTime;
			result.push(inside);
			result.push(inside2);

			_.each(stringMsg, function (value, key) {
				if (!(value instanceof Object)) {
					var inside = {};
					inside.title = key;
					inside.value = value;
					result.push(inside);
				}
				else {
						_.each(value, function (value, key) {
						var inside = {};
						inside.title = key;
						inside.value = value; 
						result.push(inside);
					});
				}
			});
			return result;
		};

		$scope.parsedMessages.push(makeMessageArray(parsed));
	});

});