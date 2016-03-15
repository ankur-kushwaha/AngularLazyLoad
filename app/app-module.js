(function () {
  'use strict';

  /* @ngdoc object
   * @name angularLazyLoad
   * @description
   *
   */
  angular
    .module('angularLazyLoad', [
      'ui.router',
	  'oc.lazyLoad',
      'catalog',
      'orders',
      'common'
    ]);
}());
