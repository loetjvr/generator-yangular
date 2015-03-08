'use strict';

describe('Service: <%= name %>', function() {

  // load the service's module
  beforeEach(module('<%= appname %>'));

  // instantiate service
  var <%= name %>;
  beforeEach(inject(function(_<%= name %>_) {
    <%= name %> = _<%= name %>_;
  }));

  it('should return value 42', function() {
    expect(<%= name %>.value).toBe(42);
  });

});
