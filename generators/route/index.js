'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.argument('name', {type: String, required: true});
    this.filename = this.name.toLowerCase();

    this.ctrlname = this._.capitalize(this._.camelize(this._.slugify(
      this._.humanize(this.name))));

    this.composeWith('yangular:view', {args: [this.name]});
    this.composeWith('yangular:controller', {args: [this.name]});

    // if mock test
    if (process.cwd().split('/').pop() === 'temp-test') {
      return;
    }

    var script = '.when(\'/' + this.filename +
      '\', {\n        templateUrl: \'views/' +
      this.filename + '.html\',\n        controller: \'' +
      this.ctrlname + 'Ctrl\'\n      })\n      .otherwise({';

    var file = path.join(process.cwd(), 'app/scripts/app.js');

    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      var result = data.replace(/.otherwise\(\{/g, script);

      fs.writeFile(file, result, 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
      });
    });
  }
});
