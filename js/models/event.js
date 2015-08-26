var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');

module.exports = Event = Backbone.Model.extend({
  initialize: function() {
    console.log(this)
  }
});