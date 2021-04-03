const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const passport  = require('./passport')
const router = require('./router')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

passport(app)
router(app)

mongoose.connect('mongodb://mongo:27017/cards')

module.exports = app;
