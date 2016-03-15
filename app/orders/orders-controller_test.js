/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('OrdersCtrl', function () {
  var ctrl;

  beforeEach(module('orders'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('OrdersCtrl');
  }));

  it('should have ctrlName as OrdersCtrl', function () {
    expect(ctrl.ctrlName).toEqual('OrdersCtrl');
  });
});
