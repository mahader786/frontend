
/*
Buffers
A Buffer in Node.js is a raw memory allocation that allows you to work with binary data. It is particularly useful for working with streams of binary data, such as file or network data.
*/

//create a buffer 

const buffer = Buffer.from('hello world hdhkdhkjedk')
console.log(buffer)

//convert the buffer back to a string
const str = buffer.toString();
console.log(str)


//streams
/*Certainly! In Node.js, streams are a powerful way to handle data that can be read from or written to incrementally. They are especially useful for efficiently processing large amounts of data or dealing with data that arrives in chunks, such as files, network requests, or other sources.
*/

/*Types of Streams
 
 Readable Streams: Allow you to read data from a source.
Writable Streams: Allow you to write data to a destination.


*/

//Readable Stream
/*A readable stream is used to read data from a source. Here's how to create and use a readable stream to read data from a file:
*/

/*const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('test.txt', {encoding:'utf-8'});

// Handle 'data' event to read chunks of data
readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// Handle 'end' event when the stream ends
readableStream.on('end', () => {
  console.log('Stream ended.');
})
*/

// Writable Stream
/*
   A writable stream is used to write data to a destination. Here's how to create and use a writable stream to write data to a file:
*/

const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Write data to the stream
writableStream.write('Hello, world!\n');
writableStream.write('This is another line.\n');


// Finalize the stream
writableStream.end(() => {
  console.log('Write stream ended.');
});



