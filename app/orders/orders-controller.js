(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name orders.controller:OrdersCtrl
   *
   * @description
   *
   */
  angular
    .module('orders')
    .controller('OrdersCtrl', OrdersCtrl);

  function OrdersCtrl() {
    var vm = this;
    vm.ctrlName = 'OrdersCtrl';
  }
}());
