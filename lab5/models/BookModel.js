const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema(
   {
      title: String,
      genre: String,
      price: Number,
      cover: String
   }
)
const BookModel = mongoose.model('books', BookSchema)  //books: table name
module.exports = BookModel