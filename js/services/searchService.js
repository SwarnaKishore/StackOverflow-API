stackOverFlowSearchApp.factory('SearchService', function($http, $filter) {
    return {
        getRequestedResults: function(searchString) {
        	var baseSearchURL = 'https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow&order=desc&sort=votes&accepted=True';
        	
        	if(searchString !== ""){
        		baseSearchURL = baseSearchURL + '&title=' + searchString;        	
        	}
		
            return $http.get(baseSearchURL);
        }
    };
});