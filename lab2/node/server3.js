const http = require('http')
const fs = require('fs')    //fs: file system
http.createServer((req, res) => {
   if (req.url == "/") {
      fs.readFile("index.html", (err, data) => {
         if (!err) {
            res.write(data)
            res.end()
         } else {
            console.error("read file failed !")
            console.error(err)
         }
      })
   } else if (req.url == "/hello") {
      fs.readFile("hello.html", (err, data) => {
         if (!err) {
            res.write(data)
            res.end()
         } else {
            console.error("read file failed !")
            console.error(err)
         }
      })
   } else {
      res.write("404 not found")
      res.end()
   }
}).listen(5000, () => {
   console.log("http://localhost:5000")
})