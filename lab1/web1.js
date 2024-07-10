const http = require('http')
http.createServer((req, res) => {
   if (req.url === '/')
      res.write("<h1>Homepage</h1>")
   else if (req.url === '/login')
      res.write("<h1>Login page</h1>")
   else if (req.url === '/about')
      res.write("<h1>About page</h1>")
   else if (req.url === '/contact')
      res.write("<h1>Contact page</h1>")
   else
      res.write("<h1>404 - Not Found</h1>")
   res.end()
}).listen(8888, () => {
   console.log('http://localhost:8888')
})