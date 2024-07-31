const express = require('express')
const router = express.Router()

var BookModel = require('../models/BookModel')

//Get all books
//URL: http://localhost:PORT/book
router.get('/', async (req, res) => {
   let books = await BookModel.find({}).sort({ _id: -1 })
   res.render('book/index', { books })
})

//Get book by id
//URL: http://localhost:PORT/book/detail/{id}
router.get('/detail/:id', async (req, res) => {
   //get book id value from url
   let id = req.params.id
   //return book data based on id
   let book = await BookModel.findById(id)
   //render view with book data
   res.render('book/detail', { book })
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
      console.error(err)
      //res.send("Delete failed !")
   }
   //redirect to book list page
   res.redirect('/book')
})

//URL: http://localhost:PORT/book/add
//render form "add book" for user to input
router.get('/add', (req, res) => {
   res.render('book/add')
})

//get input data from "add book" form & save to DB
router.post('/add', async (req, res) => {
   try {
      //get input data
      let book = req.body
      //save book to DB
      await BookModel.create(book)
      //show message to console
      console.log('Add book succeed !')
   } catch (err) {
      console.error (err)
   }

   //redirect to book list page
   res.redirect('/book')
})

//URL: http://localhost:PORT/book/edit/{id}
//render form "edit"
router.get('/edit/:id', async (req, res) => {
   let id = req.params.id
   let book = await BookModel.findById(id)
   res.render('book/edit', { book })
})

//process form "edit"
router.post('/edit/:id', async (req, res) => {
   let id = req.params.id
   let book = req.body
   try {
      await BookModel.findByIdAndUpdate(id, book)
      console.log('Edit book succeed !')
   } catch (err) {
      console.log("Edit book failed !")
      console.error(err)
   }
   res.redirect('/book')
})

module.exports = router