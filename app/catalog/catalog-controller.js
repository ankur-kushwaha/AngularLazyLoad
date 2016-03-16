(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name catalog.controller:CatalogCtrl
   *
   * @description
   *
   */
  angular
    .module('catalog')
    .controller('CatalogCtrl', CatalogCtrl);

  function CatalogCtrl($http) {
    var vm = this;
    vm.ctrlName = 'CatalogCtrl';
    
    
    vm.getData=function(){
    	$http.get('http://www.airtel.in/4g/api/plans/getMobilePlans?city=Bangalore&identifier=BOOSTER&lob=MOBILE_POSTPAID_4GPACKS',{
	    }).then(function(data){
	    	console.log(data);
	    })
    }
  }
}());
