var express = require('express')
var router = express.Router()

//localhost:4000/hcm
router.get('/', (req, res) => {
   res.send("<h1>Ho Chi Minh City</h1>")
})

//localhost:4000/hcm/quan1
router.get('/quan1', (req, res) => {
   res.send("<h1>Quan 1 - HCM City</h1>")
})

//localhost:4000/hcm/binhthanh
router.get('/binhthanh', (req, res) => {
   res.send("<h1>Quan Binh Thanh - HCM City</h1>")
})

module.exports = router