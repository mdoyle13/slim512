var _ = require('underscore'),
    $ = require('jquery'),
    Mn = require('backbone.marionette'),
    EventView = require('./eventView.js');


module.exports = Mn.CollectionView.extend({
  childView: EventView
});