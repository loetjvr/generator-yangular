'use strict';

var yeoman = require('yeoman-generator');
var util = require('../../util.js');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.argument('name', {type: String, required: true});
    this.filename = this.name.toLowerCase();

    this.ctrlname = this._.capitalize(this._.camelize(this._.slugify(
      this._.humanize(this.name))));

    this.composeWith('yangular:view', {args: [this.name]});
    this.composeWith('yangular:controller', {args: [this.name]});

    util.wireRoute({
      filename: this.filename,
      ctrlname: this.ctrlname
    });
  }
});
