
   codeWalkThrough.controller('stackoverflowController',function ($scope, stackoverflowService, $log)
   {
    $scope.inputSearch = "";
   	$scope.showTopQuestions = false;

   	$scope.checkIfEnterKeyWasPressed = function($event){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
       fetchResults();
       $scope.showTopQuestions = true;
   		}
  	};

   	function fetchResults(){
	    stackoverflowService.getRequestedResults($scope.inputSearch).then(function(apiResponse)
	      {
	        $scope.results = apiResponse;
	      });
   	}

   });
