const express = require('express')
const router = express.Router()

//url: localhost:3000/demo
router.get('/', (req, res) => {
   //path: views/demo.hbs
   res.render('demo')
})

//url: localhost:3000/demo/euro
router.get('/euro', (req, res) => {
   //path: views/euro.hbs
   res.render('euro')
})

module.exports = router