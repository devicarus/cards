const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const setupPassport  = require('./setupPassport')
const setupRoutes = require('./setupRoutes')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

setupPassport(app)
setupRoutes(app)

mongoose.connect('mongodb://mongo:27017/cards', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.set('useCreateIndex', true)

module.exports = app;
