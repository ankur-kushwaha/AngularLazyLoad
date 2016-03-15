/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CatalogCtrl', function () {
  var ctrl;

  beforeEach(module('catalog'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CatalogCtrl');
  }));

  it('should have ctrlName as CatalogCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CatalogCtrl');
  });
});
