console.log("hello")

// import modul  in js
// const app = require('./app');
// app.sayHello();

// Create the Server
const http = require("http")
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('Hello Vithoo');
});
server.listen(port,()=>{
    console.log(`Sever running at ${port}`)

});

// Create Filesystem
const fs = require("fs");
fs.writeFile("file.txt","Hello,World",(err)=>{
    if(err) throw err;
    console.log("data Written File");
});

// read file
fs.readFile('file.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

// node.js Event
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('customEvent', (message) => {
  console.log(message);
  
});
emitter.emit('customEvent', 'Hello World');



