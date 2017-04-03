codeWalkThrough.factory('newyorktimesService', function($http) {
    return {
        getRequestedResults: function(searchString) {
       	var baseSearchURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a56b24ab430f4f9badd6af40ba347eb3';
        	if(searchString !== "")
          {
        		baseSearchURL = baseSearchURL + '&q='+ searchString ;
        	}
        
            return $http.get(baseSearchURL);
        }
    };
});
