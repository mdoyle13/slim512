"use strict";

var _ = require('underscore'),
    $ = require('jquery'),
    Backbone = require('backbone'),
    EventsCollection = require('./collections/events.js'),
    EventsCollectionView = require('./views/eventsCollectionView.js');
    
    
module.exports = Backbone.Router.extend({
    
  routes: {
    "": "index"
  },
  
  index: function() {
    
    // TODO:  use a controller or plain old object here to do all this shit
    var eventsCollection = new EventsCollection();
    
    eventsCollection.fetch({
      reset: true,
      dataType: 'jsonp'
    });
    
    var collectionView = new EventsCollectionView({
      collection: eventsCollection
    });
  
    collectionView.render();
    
    //populate the region with the content
    window.app.root.content.show(collectionView)
  } 
});