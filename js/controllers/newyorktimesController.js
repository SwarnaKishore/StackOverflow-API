
   codeWalkThrough.controller('newyorktimesController',function ($scope, newyorktimesService,  $log)
   {
        $scope.showArticles = false;

    $scope.checkIfEnterKeyWasPressed = function($event)
    {
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) 
    {
       fetchQueryResults($scope.searchString);
       $scope.showArticles = true;
      }
    };

      function fetchQueryResults(searchString)
      {

        newyorktimesService.getRequestedResults(searchString).then(function(searchQuery)
          {
            $scope.searchQuery = searchQuery
          });
      }


   });
      
