var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = () => {
  console.log('I hear a scream!');
}

console.log('wait...');
eventEmitter.on('scream', myEventHandler);

setTimeout(() => {
  eventEmitter.emit('scream');
}, 1000);
