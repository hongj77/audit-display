app.controller("MainController", function($scope) {

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

	$scope.searchString = "";
	$scope.parsedMessages = [];

	//merges two js objects into one
	function mergeObj(ob1,ob2) {
		for (key in ob2) {
			if (ob2.hasOwnProperty(key))
				ob1[key] = ob2[key];
		}
		return ob1;
	}

	//feed in ONE msg, return an object stateChangeMsg
	function makeObj (msg) {
		return JSON.parse(msg.eventEntry[0].contents.stateChangeMsg);
	}

	//feed this ONE msg, returns a flattened object of stateChangeMsg
	function makeFlat(msg) {
		var obj1 = makeObj(msg); //stateChangeMsg without auditMessage
		delete obj1.auditMessage; 
		var obj2 = makeObj(msg).auditMessage; //obj2 auditMessage

		return result = mergeObj(obj1,obj2);
	}

	//feed it an array of json objects, returns formatted with title and value properties
	function processMessages(msgs) {
		resultArr = [];
		for (var i = 0; i < msgs.length; i++) {

			var formatObject = _.map(makeFlat(msgs[i]), function(value,key){
				var result = {};
				result.title = key;
				result.value = value;
				return result;
			});
			resultArr.push(formatObject);
		}
		return _.flatten(resultArr);
	}

	$scope.parsedMessages = processMessages($scope.messages);

});