'use strict';

describe('Controller: <%= name %>Ctrl', function() {

  // load the controller's module
  beforeEach(module('<%= appname %>'));

  var <%= name %>Ctrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    <%= name %>Ctrl = $controller('<%= name %>Ctrl', {
      $scope: scope
    });
  }));

  it('should set name to <%= name %>Ctrl', function() {
    expect(scope.name).toBe('<%= name %>Ctrl');
  });
});
