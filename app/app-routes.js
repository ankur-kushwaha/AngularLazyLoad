(function () {
  'use strict';

  angular
    .module('angularLazyLoad')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
