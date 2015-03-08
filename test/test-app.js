'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('yangular:app', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({'skip-install': true})
      .on('end', done);
  });

  it('creates app files', function() {
    assert.file([
      '.bowerrc',
      '.editorconfig',
      '.gitignore',
      '.jscsrc',
      '.jshintrc',
      'bower.json',
      'gulpfile.js',
      'package.json'
    ]);
  });

  it('creates app directory', function() {
    assert.file([
      'app/404.html',
      'app/favicon.ico',
      'app/index.html',
      'app/robots.txt',
      'app/scripts/app.js',
      'app/scripts/controllers/main.js',
      'app/styles/main.less',
      'app/views/main.html'
    ]);
  });

  it('creates test directory', function() {
    assert.file([
      'test/karma.conf.js',
      'test/spec/controllers/main.js'
    ]);
  });
});

describe('yangular:constant', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/constant'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates constant files', function() {
    assert.file([
      'app/scripts/services/test.js',
      'test/spec/services/test.js'
    ]);
  });
});

describe('yangular:controller', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/controller'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates controller files', function() {
    assert.file([
      'app/scripts/controllers/test.js',
      'test/spec/controllers/test.js'
    ]);
  });
});

describe('yangular:directive', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/directive'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates directive files', function() {
    assert.file([
      'app/scripts/directives/test.js',
      'test/spec/directives/test.js'
    ]);
  });
});

describe('yangular:factory', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/factory'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates factory files', function() {
    assert.file([
      'app/scripts/services/test.js',
      'test/spec/services/test.js'
    ]);
  });
});

describe('yangular:filter', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/filter'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates filter files', function() {
    assert.file([
      'app/scripts/filters/test.js',
      'test/spec/filters/test.js'
    ]);
  });
});

// need mock for app script wiring
// describe('yangular:route', function() {
//   before(function(done) {
//     var deps = [
//       [helpers.createDummyGenerator(), 'yangular:view'],
//       [helpers.createDummyGenerator(), 'yangular:controller']
//     ];

//     helpers.run(path.join(__dirname, '../generators/route'))
//       .inDir(path.join(os.tmpdir(), './temp-test'))
//       .withGenerators(deps)
//       .withArguments(['test'])
//       .on('end', done);
//   });

//   it('runs view and controller tasks', function() {
//     assert(true);
//   });
// });

describe('yangular:service', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/service'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates service files', function() {
    assert.file([
      'app/scripts/services/test.js',
      'test/spec/services/test.js'
    ]);
  });
});

describe('yangular:view', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/view'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates view file', function() {
    assert.file([
      'app/views/test.html'
    ]);
  });
});
