
   codeWalkThrough.controller('stackoverflowController',function ($scope, stackoverflowService, $log)
   {
    $scope.inputSearch = "";
   	$scope.showTopQuestions = false;

   	$scope.checkIfEnterKeyWasPressed = function($event){
      var keyCode = $event.which || $event.keyCode;
      if(keyCode === 13) {
         fetchResults();
         $scope.showTopQuestions = true;
     		}
  	};

    $('input.autocomplete').autocomplete({
    data: {
      "C#":null,
      "JavaScript": null,
      "AngularJs": null,
      "CSS": null,
      "Material Design": null,
      "Bootstrap": null,
      "PHP": null,
      "Python" : null,
      "React" : null,
      "jQuery" : null,
      "Wordpress" : null,
      "Array" : null,
      "Java" : null,
      "HTML" : null,
      "Android" : null,
      "IOS" : null,
      "ASP.NET" : null,
      "SQL" : null,
      "Linux" : null
    },
    limit: 20,
    onAutocomplete: function(val) {
      fetchResults();
      $scope.showTopQuestions = true;
    },
    minLength: 1,
  });
      

   	function fetchResults(){
	    stackoverflowService.getRequestedResults($scope.inputSearch).then(function(apiResponse)
	      {
	        $scope.results = apiResponse;
	      });
   	}

   });
