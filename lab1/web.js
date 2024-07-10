//declare http module (library/package)
const http = require('http')

//declare server name (host)
const host = 'localhost'

//declare server port
const port = 5000    //default port of NodeJS

//create web server
//declare function with new syntax (from ES6)
const server = http.createServer((request, response) => {
   //display text to web
   response.write("<h1 style='color: red;'>Hello world</h1>")
   response.write("<h2 style='font-style: italic;'>We are learning NodeJS</h2>")
   response.write("<h3 style='text-decoration: underline;'>Euro 2024</h3>")
   //end response
   response.end()
})

//run web server : server listens to port
server.listen(port, () => {
   //Hold CTRL button & click on given url to open web
   console.log("server is running at http://" + host + ":" + port)
})

//CTRL + C : stop server in Terminal

//use nodemon (node monitor) to auto reload server when updating code
//1. Installation
//   npm install -g nodemon
//2. Usage
//   nodemon "file_name"