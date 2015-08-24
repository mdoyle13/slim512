//include other app stuff

var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');

module.exports = Mn.Application.extend({
  initialize: function() {
    console.log('app view initialized');
  }
});

