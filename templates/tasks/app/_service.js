'use strict';

/**
 * @ngdoc service
 * @name <%= appname %>.<%= name %>
 * @description
 * # <%= name %>
 * Service in <%= appname %>.
 */
angular.module('<%= appname %>')
  .service('<%= name %>', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var  values = {
      value: 42
    };

    return values;
  });
