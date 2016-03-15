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

  function CatalogCtrl() {
    var vm = this;
    vm.ctrlName = 'CatalogCtrl';
  }
}());
