'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config.js'),
    webpackProductionConfig = require('./webpack.production.config.js'),
    map = require('map-stream'),
    _ = require('underscore'),
    fs = require('fs'),
    ReactTools = require('react-tools'),
    touch = require('touch');

var $ = require('gulp-load-plugins')();

var devServer = {};

// Configure JSX Harmony transform in order to be able
// require .js files with JSX (see 'pages' task)
var originalJsTransform = require.extensions['.js'];
var reactTransform = function(module, filename) {
  if (filename.indexOf('node_modules') === -1) {
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    src = ReactTools.transform(src, {harmony: true, stripTypes: true});
    module._compile(src, filename);
  } else {
    originalJsTransform(module, filename);
  }
};
require.extensions['.js'] = reactTransform;

// CSS
gulp.task('css', function() {
  return gulp.src(['src/styles/*.sass', 'src/styles/*.scss'])
    .pipe($.compass({
      css: 'public/',
      sass: 'src/styles',
      image: 'src/styles/images',
      style: 'nested',
      comments: false,
      bundle_exec: true,
      time: true,
      require: [
        'susy',
        'modular-scale',
        'normalize-scss',
        'sass-css-importer',
        'sassy-buttons',
        'breakpoint'
      ]
    }))
    .on('error', function(err) { gutil.log(err);})
    .pipe($.size())
    .pipe(gulp.dest('public/'))
    .pipe(map(function(a, cb) {
      if (devServer.invalidate) {
        devServer.invalidate();
      }
      cb();
    }));
});

// copy assets
gulp.task('copy-assets', function() {
  return gulp.src('assets/**')
    .pipe(gulp.dest('public'))
    .pipe($.size());
});


// Some quick notes on using fontcustom.
// First you need to install some additional software
// as detailed at https://github.com/FontCustom/fontcustom#installation
// On MacOSX, this comment was the only way I got things to work: https://github.com/FontCustom/fontcustom/issues/209#issuecomment-48014939
// Otherwise I got a Python import error.
//
// Then once things are working, things here are setup so that the generated font
// is base64 encoded and included in the css file. For this to work, you
// need to edit the generated scss file at src/styles/_fontcustom.scss to remove
// its font-face imports.
// Font compilation
gulp.task('font', $.shell.task(['fontcustom compile']));

gulp.task('font-base-64', function() {
  return gulp.src('assets/fonts/*.ttf')
    .pipe($.rename('fontcustom.ttf'))
    .pipe($.cssfont64())
    .pipe($.rename('_fontcustom_embedded.scss'))
    .pipe(gulp.dest('src/styles'));
});


gulp.task('webpack:build', function(callback) {
  // Run Webpack
  webpack(webpackProductionConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({colors: true}));
    callback();
    return;
  });
});

// Create a single instance of the compiler to allow caching
var devCompiler = webpack(webpackConfig);

gulp.task('webpack:build-dev', function(callback) {
  // Run Webpack
  devCompiler.run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build-dev', err);
    }

    gutil.log('[webpack:build-dev]', stats.toString({colors: true}));
    callback();
    return;
  });

  return;
});

gulp.task('webpack-dev-server', function(callback) {
  touch.sync('./public/main.css', {time: new Date(0)});

  // Start a webpack-dev-server
  devServer = new WebpackDevServer(webpack(webpackConfig),{
    contentBase: './public/',
    hot: true,
    watchDelay: 100,
    noInfo: true
  });

  devServer.listen(3001, '0.0.0.0', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:3001');
    return callback();
  });
  return;
});

gulp.task('default', function() { gulp.start('build'); });

gulp.task('build', ['webpack:build', 'css', 'copy-assets']);

gulp.task('watch', ['css', 'copy-assets', 'webpack-dev-server'], function () {
  gulp.watch(['src/styles/**'], ['css']);
  gulp.watch(['assets/**'], ['copy-assets']);
});
