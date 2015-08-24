"use strict";

var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Layout = require('./views/layout');

module.exports = Backbone.Router.extend({
  initialize: function(options) {
    console.log('init router')
  },
  
  routes: {
    "": "index"
  },
  
  index: function() {
    var layoutView = new Layout;
    layoutView.render();
    
  }
  
});