
codeWalkThrough.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
    $routeProvider.
      when('/stackoverflow', {
          templateUrl: 'views/stackoverflow.html',
          controller: 'stackoverflowController'
            }).
      when('/newyorktimes', {
          templateUrl: 'views/newyorktimes.html',
          controller: 'newyorktimesController'
            }).
      otherwise({
         redirectTo: '/'
            });    
});
