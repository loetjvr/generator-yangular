'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.sourceRoot(path.join(__dirname, '../../templates/app'));

    this.argument('appname', {type: String, required: false});
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(
      this._.humanize(this.appname)));
  },
  writing: {
    files: function() {
      this.template('_bowerrc', '.bowerrc');
      this.template('_editorconfig', '.editorconfig');
      this.template('_gitignore', '.gitignore');
      this.template('_jscsrc', '.jscsrc');
      this.template('_jshintrc', '.jshintrc');
      this.template('bower.json');
      this.template('gulpfile.js');
      this.template('package.json');
    },
    directories: function() {
      this.directory('app');
      this.directory('test');
    }
  },
  install: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
