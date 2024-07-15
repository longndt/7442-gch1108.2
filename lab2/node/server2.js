const http = require('http')
http.createServer((req, res) => {
   if (req.url == '/') {
      //return a web page
      res.setHeader("Content-Type", "text/html")
      res.write("<h1>University of Greenwich (Vietnam)</h1>")
      res.end()
   } else if (req.url == '/demo') {
      //return a JSON (API format)
      res.setHeader("Content-Type", "application/json")
      res.write(JSON.stringify({ univerity: "Greenwich" }))
      res.end()
   } else {
      res.write("<h1>404 Not Found</h1>")
      res.end()
   }
}).listen(4000, () => {
   console.log('http://localhost:4000')
})