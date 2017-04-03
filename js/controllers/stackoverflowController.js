
   codeWalkThrough.controller('stackoverflowController',function ($scope, stackoverflowService, $log)
   {
   	$scope.showTopQuestions = false;

   	$scope.checkIfEnterKeyWasPressed = function($event){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
       fetchResults($scope.input.search);
       $scope.showTopQuestions = true;
   		}
  	};

   	function fetchResults(searchString){

	    stackoverflowService.getRequestedResults(searchString).then(function(resultSet)
	      {
	        $scope.resultSet = resultSet
	      });
   	}

   });
