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
    console.log('demo')
  },
  land: function(options){
    console.log('land')
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