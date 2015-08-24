"use strict";

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
// load up an App instance from the module

// this needs to be done for some reason
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

var App = require('./js/app');
var Router = require('./js/router');

//create a new one baby
var app = new App;
var approuter = new Router;

app.on("start", function(options){
  if (Backbone.history){
    console.log('on start event fired, backbone history be working')
    Backbone.history.start();  
  }
});

app.start();