
   stackOverFlowSearchApp.controller('SearchController',function ($scope, SearchService, $log)
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

	    SearchService.getRequestedResults(searchString).then(function(resultSet)
	      {
	        $scope.resultSet = resultSet
	      });
   	}

   });
