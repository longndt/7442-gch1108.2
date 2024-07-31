var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
   //1) render homepage
   res.render('index', { title: "Book Management System" })
   //2) redirect to Book List page
   //res.redirect('/book')
})

module.exports = router;
