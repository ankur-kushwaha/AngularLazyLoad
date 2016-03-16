(function() {
	'use strict';

	/*
	 * @ngdoc object @name common @description
	 * 
	 */
	angular.module('common', [ 'ui.router' ]).run(function($rootScope,ngProgressFactory) {
		var ngProgress=ngProgressFactory.createInstance();
		$rootScope.$on('$stateChangeStart', function(event, viewConfig) {
			ngProgress.start();
		});

		$rootScope.$on('$stateChangeSuccess', function(event) {
			ngProgress.complete();
		});

	})

}());
