var express = require('express');
var router = express.Router();

var BookModel = require('../models/BookModel')

//Get all books
router.get('/books', async (req, res) => {
  //get books from database & save to array named "books"
  let books = await BookModel.find({})
  //(1) show result to console (for developer)
  //console.log(books)
  //(2) show result to web page (for customer)
  //res.send(books)
  //(3) render page and display result
  res.render('books' , { books })
})

module.exports = router;
