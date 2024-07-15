var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//URL: localhost:3000/login
router.get('/login', (req, res) => {
  //Path: views/login.hbs
  res.render('login')
})

router.get('/hn', (req, res) => {
  res.render('hanoi')
})

router.get('/hanoi', (req, res) => {
  res.render('hanoi')
})

module.exports = router;
