const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         minLength: 5,
         maxLength: 50
      },
      genre: String,
      price: {
         type: Number,
         required: true,
         min: [1, 'Lowest price must be 1$'],
         max: 1000
      },
      cover: String
   }
)
const BookModel = mongoose.model('books', BookSchema)  //books: table name
module.exports = BookModel