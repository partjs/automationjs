/**
 * Modules
 */
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

/**
 * Benchmark
 */
//var Benchmark = require('benchmark');
//var suite = new Benchmark.Suite;

/**
 * Element Class (ViewModel)
 */
var SpotList = require('./src/SpotList');
var Article = require('./src/Article');

/**
 * Module
 */
module.exports = {
    SpotList: SpotList,
    Article: Article
};
