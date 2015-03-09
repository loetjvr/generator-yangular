'use strict';

var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var inject = require('gulp-inject');

var exports = {
  wireIndex: function(scriptsDir) {
    var appDir = path.join(process.cwd(), path.dirname(scriptsDir));

    gulp.src(appDir + '/index.html')
    .pipe(inject(gulp.src(scriptsDir + '**/*.js'), {
      starttag: '<!-- build:js({.tmp,app}) scripts/scripts.js -->',
      endtag: '<!-- endbuild -->',
      relative: true
    }))
    .pipe(gulp.dest(appDir));
  },
  wireRoute: function(vars) {
    var script = '})\n      .when(\'/' + vars.filename +
      '\', {\n        templateUrl: \'views/' +
      vars.filename + '.html\',\n        controller: \'' +
      vars.ctrlname + 'Ctrl\'\n      }) //inject:route';

    var file = path.join(process.cwd(), 'app/scripts/app.js');

    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      var result = data.replace(/\}\)( )\/\/inject:route/g, script);

      fs.writeFile(file, result, 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
      });
    });
  }
};

module.exports = exports;
