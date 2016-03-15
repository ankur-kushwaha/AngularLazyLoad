/* global describe, beforeEach, it, browser, expect */
'use strict';

var OrdersPagePo = require('./orders.po');

describe('Orders page', function () {
  var ordersPage;

  beforeEach(function () {
    ordersPage = new OrdersPagePo();
    browser.get('/#/orders');
  });

  it('should say OrdersCtrl', function () {
    expect(ordersPage.heading.getText()).toEqual('orders');
    expect(ordersPage.text.getText()).toEqual('OrdersCtrl');
  });
});
