
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myemit = new MyEmitter()


// Listener for the 'requestReceived' event
myemit.on('requestReceived', (message) => {
    console.log(`Event received: ${message}`);
});

module.exports = myemit;
