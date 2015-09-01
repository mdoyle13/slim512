//events collection

var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var Event = require('../models/event');

module.exports = Backbone.Collection.extend({
  model: Event,
  url: 'http://do512.com/events.json',
  parse: function( response ) {
    return response.events
  }
});