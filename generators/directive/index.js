'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.sourceRoot(path.join(__dirname, '../../templates/tasks'));

    this.argument('name', {type: String, required: true});
    this.filename = this.name.toLowerCase();

    this.name = this._.camelize(this._.slugify(
      this._.humanize(this.name)));

    this.appname = this.determineAppname();
  },
  writing: {
    files: function() {
      this.template('app/_directive.js', 'directives/' + this.filename + '.js');
      this.template('test/_directive.js', 'test/spec/directives/' +
        this.filename + '.js');

      // if not a mock test
      if (process.cwd().split('/').pop() !== 'temp-test') {
        this.spawnCommand('gulp', ['wiredep']);
      }
    }
  }
});
