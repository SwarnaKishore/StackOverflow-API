
   codeWalkThrough.controller('newyorktimesController',function ($scope, newyorktimesService,  $log)
   {
      $scope.selectedYear = 1850;
      $scope.searchString = "";
      $scope.showArticles = false;
      $scope.articles = [];

      $scope.checkIfEnterKeyWasPressed = function($event)
      {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) 
        {
         fetchQueryResults();
         $scope.showArticles = true;
        }
      };

      $scope.yearChanged = function(year){
         $scope.selectedYear = year;
         fetchQueryResults();
         $scope.showArticles = true;
      }

      function fetchQueryResults()
      {
        newyorktimesService.getRequestedResults($scope.searchString, $scope.selectedYear).then(function(apiResponse)
        {
            for(i = 0; i < apiResponse.data.response.docs.length; i++)
            {
              var item = apiResponse.data.response.docs[i];
              var article = {};
              article.title = item.headline.main;
              article.url = item.web_url;
              article.date = item.pub_date;
              article.paragraph = getArticleParagraph(item);
              $scope.articles[i] = article;
            }

        });
      }

      function getArticleParagraph(item)
      {
        if(item.lead_paragraph !== "")
        {
          return item.lead_paragraph;
        }

        if(item.abstract !== "")
        {
          return item.abstract;
        }

        if(item.snippet !== "")
        {
          return item.snippet;
        }

      }


   });
      
