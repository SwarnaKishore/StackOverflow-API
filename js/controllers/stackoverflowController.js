
   codeWalkThrough.controller('stackoverflowController',function ($scope, stackoverflowService, $log)
   {
    $scope.inputSearch = "";
     $scope.showTopQuestions = false;
     $scope.notFound = false;
    fetchResults();
    $scope.showTopQuestions = true;
   	$scope.checkIfEnterKeyWasPressed = function($event){
      var keyCode = $event.which || $event.keyCode;
      if(keyCode === 13) {
         fetchResults();
         $scope.showTopQuestions = true;
     		}
  	};
 $(document).ready(function() {
    $('input.autocomplete').autocomplete({
    data: {
      "C#":null,
      "JavaScript": null,
      "AngularJs": null,
      "Angular2": null,
      "Materialize": null,
      "Ionic": null,
      "Github": null,
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
   });
      

   	function fetchResults(){
	    stackoverflowService.getRequestedResults($scope.inputSearch).then(function(apiResponse)
	      {
          $scope.results = apiResponse;
          if($scope.results.data.items.length == 0)
                $scope.notFound = true;
          else
                $scope.notFound = false;
	      });
   	}

   });
