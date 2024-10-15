
/*
  Core Modules of Node.js
Node.js comes with a set of built-in modules that provide essential functionalities for building applications. Here are some of the core modules:

*/ 

//fs (File System):
/*
   Provides methods to interact with the file system, allowing you to read, write, and manipulate files.
*/



/*const fs = require('fs');
fs.readFile('test.txt','utf8', (err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})*/


//path:

//Provides utilities for working with file and directory paths. It helps with cross-platform path manipulations.

//eg

/*const path = require('path')
const filepath = path.join(__dirname,'test.txt')
console.log(filepath)*/

//events
/*
   Provides an EventEmitter class for handling events and listeners. It allows you to create custom event-driven components.
*/

/*const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('event', () => {
  console.log('Event occurred!');
});
emitter.emit('event');*/







//http:

/*Provides utilities to create HTTP servers and clients. You can use it to handle HTTP requests and responses.*/

//eg

/*const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world')
})

server.listen(2000,()=>{
    console.log('server is running on the port')
})*/


/*const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',(error,data)=>{
        if(error){
            res.writeHead(404)
            res.write('page not found')
        }
        else{
            res.write(data)
        }
       res.end()
    })
})

server.listen(2500,()=>{
    console.log('server is running on the port')
})
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';

    // Determine the file to serve based on the request URL
    if (req.url === '/') {
        filePath = path.join(__dirname, 'home.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'contact.html');
    } else {
        filePath = path.join(__dirname, '404.html');
    }

    // Read and serve the file content
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // If an error occurred while reading the file
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error occurred while reading the file.');
        } else {
            // If the file was read successfully
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});



/*
  200-success
  400- client bad request
  404 - page not found
  500-server error
*/

