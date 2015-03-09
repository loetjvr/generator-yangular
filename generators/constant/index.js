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

    this.scriptsDir = this.config.get('scriptsDir') || this.options.scriptsDir;
  },
  writing: {
    files: function() {
      this.template('app/_constant.js', this.scriptsDir + 'services/' +
        this.filename + '.js');
      this.template('test/_constant.js', 'test/spec/services/' +
        this.filename + '.js');

      this.on('end', function() {
        util.wireIndex(this.scriptsDir);
      });
    }
  }
});
