var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//URL: localhost:4000/demo
router.get('/demo', (req, res) => {
  //Path: views/demo.hbs
  res.render('demo')
})

router.get('/hello', (req, res) => {
  res.render('demo')
})

router.get('/hanoi123', (req, res) => {
  res.render('hanoi')
})

router.get('/hn', (req, res) => {
  res.redirect('/hanoi123')
})

router.get('/sports', (req, res) => {
  let football = "Football"
  let swimming = "Swimming"
  res.render('sports', { football, swimming, tennis : "Tennis" })
})

router.get('/test', (req, res) => {
  let year = 2024
  let phones = ['iphone', 'samsung', 'oppo', 'huawei', 'sony', 'xiaomi']
  res.render('test',
    {
      year,
      city : "Ha Noi",
      mobiles : phones
    }
  )
})

module.exports = router;
