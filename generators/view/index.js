'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.sourceRoot(path.join(__dirname, '../../templates/tasks'));

    this.argument('name', {type: String, required: true});
    this.filename = this.name.toLowerCase();

    this.viewsDir = this.config.get('viewsDir') || this.options.viewsDir;
  },
  writing: {
    file: function() {
      this.template('app/_view.html', this.viewsDir + this.filename + '.html');
    }
  }
});
