/* global describe, beforeEach, it, browser, expect */
'use strict';

var CatalogPagePo = require('./catalog.po');

describe('Catalog page', function () {
  var catalogPage;

  beforeEach(function () {
    catalogPage = new CatalogPagePo();
    browser.get('/#/catalog');
  });

  it('should say CatalogCtrl', function () {
    expect(catalogPage.heading.getText()).toEqual('catalog');
    expect(catalogPage.text.getText()).toEqual('CatalogCtrl');
  });
});
