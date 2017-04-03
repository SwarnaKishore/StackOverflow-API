api.factory('articleSearchService', function($http) {
    return {
        getRequestedResults: function(searchString) {
       	var baseSearchURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        var api-key = 'a56b24ab430f4f9badd6af40ba347eb3';
        var begin_date = ;
        var q =;
        	if(searchString !== ""){
        		baseSearchURL = baseSearchURL + '?'+api-key+'?' +begin_date+'?'+q;
        	}
            return $http.get(baseSearchURL);
        }
    };
});
