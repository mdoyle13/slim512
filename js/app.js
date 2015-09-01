//include other app stuff

var _ = require('underscore'),
    $ = require('jquery'),
    Mn = require('backbone.marionette'),
    Layout = require('./views/layout');
    
    
module.exports = Mn.Application.extend({
  initialize: function() {
    console.log('app init')
  },
  
  setRootLayout: function () {
  	this.root = new Layout();
    //render that root layout dude
    this.root.render();
  }
});

