(function () {
  'use strict';

  angular
    .module('orders')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/orders',
        templateUrl: 'orders/orders.tpl.html',
        controller: 'OrdersCtrl',
        controllerAs: 'orders',
		resolve: { 
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('js/orders.js');
			}]
		}
      });
  }
}());
