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
							"entryKey":"BccccBasdasdBBBBB",
							"eventEntry":[
											{
												"tag":"EventStateChange",
												"contents":{
																"stateChangeMsg":"{\"auditUser\":\"hacker1234@gmail.com\",\"auditAction\":\"Delete\",\"auditMessage\":{\"groupName\":\"Admin\"}}",
																"stateChangeTime":1123132292
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
			inside.title = "Entry Key";
			inside.value = msg.entryKey;
			result.push(inside);

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