//include other app stuff

var _ = require('underscore'),
    $ = require('jquery'),
    Mn = require('backbone.marionette'),
    Layout = require('./views/layout'),
    EventsCollection = require('./collections/events.js');

module.exports = Mn.Application.extend({
  initialize: function() {
    eventsCollection = new EventsCollection();
    eventsCollection.fetch({
      reset: true,
      dataType: 'jsonp'
    });
  },
  
  setRootLayout: function () {
  	this.root = new Layout();
    //render that root layout dude
    this.root.render();
  }
});

