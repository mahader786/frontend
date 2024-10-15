
/*
In Node.js, the EventEmitter is a core module that allows objects to emit and listen to events. It's a fundamental part of Node.js and is used extensively to handle asynchronous operations, such as handling events in a web server or managing communication between different parts of an application.

How Does EventEmitter Work?
Emit: When an event occurs, an object can emit (or trigger) that event.
Listen: Other parts of the code can listen for this event and execute specific actions when the event is triggered.

*/

//: Import the events Module
//The EventEmitter class is part of the events module, so you first need to import it.

const EventEmitter = require('events')

// Create an EventEmitter Instance
//After importing the events module, you create an instance of the EventEmitter class.

const eventEmiiter = new EventEmitter()

//define a listener
//You can define a listener for a specific event using the on method. This listener will be executed when the event is emitted.

eventEmiiter.on('greet',()=>{
    console.log('hello world')
})

//Emit the Event
//Now, you can emit the event using the emit method. When you emit the greet event, the listener defined in the previous step will be triggered.
eventEmiiter.emit('greet')