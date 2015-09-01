"use strict";

var $ = require('jquery')
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
// load up an App instance from the module

// this needs to be done for some reason
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

var App = require('./js/app');
var Router = require('./js/router');

// TODO: Get this off the window

window.app = new App();
var approuter = new Router({app: app});

//on dom ready start this bitch up
$(function() {
  
  app.on("before:start", function() {
    this.layoutView = this.setRootLayout();
  });
  
  
  app.on("start", function(options){
    if (Backbone.history){
      Backbone.history.start({
        pushState: false
      });  
    }
  });
  app.start();
})
