//declare and import http module
const http = require('http')
//create web server
const server = http.createServer((req, res) => {
   //write head or set header for content type: 1 of them not both
   //res.writeHead(200, { 'Content-Type': 'text/html' })
   res.setHeader("Content-Type", "text/html")
   //write content for web page
   res.write("<h1 style='color: red'>Euro 2024</h1>")
   res.write("<h2 style='text-decoration: underline'>Spain is the champion</h2>")
   res.write("<h3 style='background-color: yellow'>Next week is the deadline of Assignment 1</h3>")
   //end response
   res.end()
})
//start server
server.listen(3000, () => {
   console.log("http://localhost:3000")
})