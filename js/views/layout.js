var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
//add other views and stuff here


module.exports = Mn.LayoutView.extend({
  template: "#layout",
  el: $('#app'),
  
  regions: {
    menu: "#menu",
    content: "#content"
  }
});
