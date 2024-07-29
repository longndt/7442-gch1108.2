var express = require('express');
var router = express.Router();

var BookModel = require('../models/BookModel')

//Get all books
router.get('/books', async (req, res) => {
  //get books from database & save to array named "books"
  let books = await BookModel.find({})
  //show result to console (for developer)
  console.log(books)
  //show result to web page (for customer)
  res.send(books)
})


module.exports = router;
