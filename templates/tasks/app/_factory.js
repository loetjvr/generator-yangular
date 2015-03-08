'use strict';

/**
 * @ngdoc service
 * @name <%= appname %>.<%= name %>
 * @description
 * # <%= name %>
 * Factory in <%= appname %>.
 */
angular.module('<%= appname %>')
  .factory('<%= name %>', function() {
    // Service logic
    // ...

    var value = 42;

    // Public API here
    return {
      someMethod: function() {
        return value;
      }
    };
  });
