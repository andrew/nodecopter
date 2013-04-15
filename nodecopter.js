var arDrone = require('ar-drone');
var constants = require('ar-drone/lib/constants')

var Nodecopter = {
  createClient: function(options){
    return arDrone.createClient(options)
  },
  defaultIP: constants.DEFAULT_DRONE_IP,
  config: function(options){
    console.log('config')
  },
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
    console.log('repl')
  },
  reset: function(options){
    console.log('reset')
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