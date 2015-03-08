'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');
var util = require('../../util.js');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.sourceRoot(path.join(__dirname, '../../templates/tasks'));

    this.argument('name', {type: String, required: true});
    this.filename = this.name.toLowerCase();
    this.appname = this.determineAppname();
  },
  writing: {
    files: function() {
      this.template('app/_filter.js', 'app/scripts/filters/' + this.filename + '.js');
      this.template('test/_filter.js', 'test/spec/filters/' +
        this.filename + '.js');

      this.on('end', function() {
        util.wireIndex();
      });
    }
  }
});
