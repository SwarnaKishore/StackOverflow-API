
codeWalkThrough.controller('mainController',function ($scope)
 {
      $scope.setArticleTabActive = function() 
      {
        $('#stackId').removeClass('tabsActive');
        $('#nytimesId').addClass('tabsActive');
      }
      $scope.setStackTabActive = function() 
      {
        $('#nytimesId').removeClass('tabsActive');
        $('#stackId').addClass('tabsActive');
      }
 });