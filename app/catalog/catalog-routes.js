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
			}]
		}
      });
  }
}());
