'use strict';

/**
 * @ngdoc directive
 * @name <%= appname %>.directive:<%= name %>
 * @description
 * # <%= name %>
 */
angular.module('<%= appname %>')
  .directive('<%= name %>', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the example text');
      }
    };
  });
