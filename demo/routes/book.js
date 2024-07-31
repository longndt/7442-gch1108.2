const express = require('express')
const router = express.Router()

var BookModel = require('../models/BookModel')

//Get all books
//URL: http://localhost:PORT/book
router.get('/', async (req, res) => {
   let books = await BookModel.find({})
   res.render('book_list', { books })
})

//Get book by id
//URL: http://localhost:PORT/book/detail/{id}
router.get('/detail/:id', async (req, res) => {
   //get book id value from url
   let id = req.params.id
   //return book data based on id
   let book = await BookModel.findById(id)
   //render view with book data
   res.render('book_detail', { book })
})

//Delete book by id
//URL: http://localhost:PORT/book/delete/{id}
router.get('/delete/:id', async (req, res) => {
   //get book id value from url
   let id = req.params.id
   try {
      //delete book based on id in url
      await BookModel.findByIdAndDelete(id)
      //show success message
      console.log('delete succeed !')
   } catch (err) {
      console.log('delete failed !')
      console.error(err)
      //res.send("Delete failed !")
   }
   //redirect to book list page
   res.redirect('/book')
})

module.exports = router