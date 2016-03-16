(function () {
  'use strict';

  angular
    .module('catalog')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'catalog/catalog.tpl.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog',
		resolve: { 
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('js/catalog.js');
			}],
			greet:function($http){
				 return $http.get('http://www.airtel.in/4g/api/plans/getMobilePlans?city=Bangalore&identifier=BOOSTER&lob=MOBILE_POSTPAID_4GPACKS',{
				    }).then(function(data){
				    	console.log(data);
				    })
			}
		}
      });
  }
}());
