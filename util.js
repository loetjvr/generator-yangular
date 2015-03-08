var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var inject = require('gulp-inject');

var exports = {
  wireIndex: function() {
    var appDir = path.join(process.cwd(), 'app/');

    gulp.src(appDir + 'index.html')
    .pipe(inject(gulp.src(appDir + 'scripts/**/*.js'), {
      starttag: '<!-- build:js({.tmp,app}) scripts/scripts.js -->',
      endtag: '<!-- endbuild -->',
      relative: true
    }))
    .pipe(gulp.dest(appDir));
  },
  wireRoute: function() {
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
};

module.exports = exports;
