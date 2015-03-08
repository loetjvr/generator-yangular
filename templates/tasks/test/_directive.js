'use strict';

describe('Directive: <%= name %>', function() {

  // load the <%= name %>'s module
  beforeEach(module('<%= appname %>'));

  var element;
  var scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have element text', inject(function($compile) {
    element = angular.element('<<%= name %>></<%= name %>>');
    element = $compile(element)(scope);

    expect(element.text()).toBe('this is the example text');
  }));
});
