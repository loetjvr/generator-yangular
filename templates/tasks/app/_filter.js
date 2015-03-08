'use strict';

/**
 * @ngdoc filter
 * @name <%= appname %>.filter:<%= name %>
 * @function
 * @description
 * # <%= name %>
 * Filter in <%= appname %>.
 */
angular.module('<%= appname %>')
  .filter('<%= name %>', function() {
    return function(input) {
      return 'example filter: ' + input;
    };
  });
