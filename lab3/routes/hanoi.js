var express = require('express')
var router = express.Router()

//localhost:4000/hanoi
router.get('/', (req, res) => {
   //res.send("<h1>Ha Noi</h1>")
   res.render('hanoi/hanoi')
})

//localhost:4000/hanoi/caugiay
router.get('/caugiay', (req, res) => {
   //res.send("<h1>Cau Giay - Ha Noi</h1>")
   res.render('hanoi/caugiay')
})

//localhost:4000/hanoi/thanhxuan
router.get('/thanhxuan', (req, res) => {
   //views/hanoi/thanhxuan.hbs
   res.render('hanoi/thanhxuan')
})

module.exports = router