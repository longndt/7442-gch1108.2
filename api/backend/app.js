var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//1) config mongoose: to connect & work with database
const mongoose = require('mongoose')
const db = "mongodb+srv://longndt:SwZZ3QRJ5YFMLYlc@cluster0.ziyavjz.mongodb.net/api"
mongoose.connect(db)
   .then(() => console.log('success'))
   .catch(err => console.error('error ' + err))

//2) config cors: to share API with frontend
const cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//3) config router (url)
const carRouter = require('./routes/car')
app.use('/car', carRouter)

//4) config port: to deploy web to cloud
const port = process.env.PORT || 3001
app.listen(port)

module.exports = app;
