var _ = require('underscore'),
    $ = require('jquery'),
    Mn = require('backbone.marionette');

module.exports = Mn.ItemView.extend({
  tagName: 'div',
  template: '#event-view'
});