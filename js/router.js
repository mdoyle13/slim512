"use strict";

var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  initialize: function(options) {
    console.log('init router');
  },
  
  routes: {
    "": "index"
  },
  
  index: function() {
    console.log('index router initialized')
  } 
});