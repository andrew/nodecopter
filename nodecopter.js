var arDrone = require('ar-drone');
var constants = require('ar-drone/lib/constants');
var fs = require('fs');
var prettyjson = require('prettyjson');

var Nodecopter = {
  createClient: function(options){
    return arDrone.createClient(options)
  },
  defaultIP: constants.DEFAULT_DRONE_IP,
  demo: function(options){
    var client = Nodecopter.createClient(options);
    client.takeoff();

    client
      .after(5000, function() {
        this.clockwise(0.5);
      })
      .after(3000, function() {
        this.stop();
        this.land();
      });
  },
  land: function(options){
    var client = Nodecopter.createClient(options);
    client.land()
    console.log('Landing...')
    setTimeout(function(){
      process.exit()
    },2000)
  },
  repl: function(options){
    var client = Nodecopter.createClient(options);
    client.createRepl();
  },
  reset: function(options){
    var client = Nodecopter.createClient(options);
    console.log('Resetting...')
    client.disableEmergency()
  },
  config: function(options){
    var config
    fs.exists('./nodecopter.json', function (exists) {
      if (exists){
        config = require('./nodecopter.json')
        console.log(prettyjson.render(config))
      } else {
        fs.exists('~/nodecopter.json', function (exists) {
          if (exists){
            config = require('~/nodecopter.json')
          } else {
            config = require('./defaults.json')
          }
          console.log(prettyjson.render(config))
        });
      }
    });
    
  },
  status: function(options){
    console.log('status')
  },
  telnet: function(options){
    console.log('telnet')
  },
  trim: function(options){
    console.log('trim')
  }
}

module.exports = Nodecopter