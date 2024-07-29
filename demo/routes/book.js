const express = require('express')
const router = express.Router()

var BookModel = require('../models/BookModel')

//Get all books
//URL: http://localhost:3000/book
router.get('/', async (req, res) => {
   let books = await BookModel.find({})
   res.render('book_list', { books })
})

//Get book by id
//URL: http://localhost:3000/book/detail/{id}
router.get('/detail/:id', async (req, res) => {
   //get book id value from url
   let id = req.params.id
   //return book data based on id
   let book = await BookModel.findById(id)
   //render view with book data
   res.render('book_detail', { book })
})

module.exports = router