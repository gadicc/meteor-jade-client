Package.describe({
  name: 'gadicohen:jade-client',
  summary: 'Wrapper for mquandalle:jade to use client-side',
  version: '0.2.9_1', /* 1b360ee */
  git: 'https://github.com/gadicc/meteor-jade-client.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['underscore', 'spacebars-compiler'], 'client');

  api.addFiles([
    // modules, exports
  	'lib/pre-jade.js',

  	// https://github.com/mquandalle/jade
  	// f3f956fa1031e05f85be7bc7b67f12e9ec80ba37
  	'lib/jade/jade.js',

    // Npm.require
  	'lib/pre-meteor-jade.js',

  	// https://github.com/mquandalle/meteor-jade
  	// 1b360ee01d7a7c0c3b9795e18aea13c02766489c
  	'lib/meteor-jade/plugin/lexer.js',
  	'lib/meteor-jade/plugin/parser.js',
  	'lib/meteor-jade/plugin/compiler.js',
  	//'lib/meteor-jade/plugin/handler.js',

    // jadeClient
  	'lib/post-meteor-jade.js'
	], 'client');

	api.export('jadeClient', 'client');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gadicohen:jade-client');
});
*/