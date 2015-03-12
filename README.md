# generator-yangular ![Build Status](https://travis-ci.org/loetjvr/generator-yangular.svg?branch=master) [![Dependency Status](https://david-dm.org/loetjvr/generator-yangular.svg)](https://david-dm.org/loetjvr/generator-yangular.svg)

> Yeoman generator for AngularJS with [Gulp](http://gulpjs.com/), [Bootstrap](http://getbootstrap.com) and [LESS](http://lesscss.org/)
> based on [generator-angular](https://github.com/yeoman/generator-angular)

## Installation

Install `yo`, `gulp`, `bower`, `generator-yangular`:
```
npm install -g gulp bower yo generator-yangular
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd my-new-project
```

Run `yo yangular`, optionally passing an app name:
```
yo yangular [app-name]
```

## Gulpfile
Serve the project at `http://locahost:9000`
```
gulp serve
```
Add the option `--open` to open and serve the project at `http://locahost:9000`
```
gulp serve --open
```
Generate a `dist` directory ready for production
```
gulp build
```
Run Karma tests
```
gulp test
```
Generate [ngDocs](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) folder with all the generated documentation in a format that can be hosted
```
gulp docs
```

## Generators

Available generators:
```bash
yo yangular:view name
```

```bash
yo yangular:controller name
```

```bash
yo yangular:route name
```

```bash
yo yangular:directive name
```

```bash
yo yangular:filter name
```

```bash
yo yangular:service name
```

```bash
yo yangular:factory name
```

```bash
yo yangular:constant name
```

## Editor Plugins
* [EditorConfig](http://editorconfig.org/#download)
* [JSHint](http://jshint.com/install/)
* [JSSC](http://jscs.info/overview.html)

## License

MIT
