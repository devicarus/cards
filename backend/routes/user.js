const express = require('express');

const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router();

const User = require('../models/User')

router.post('/register', (req, res, next) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).send({ email: "Email already exists" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;

          new User({
            email: req.body.email,
            password: hash
          }).save()
            .then(user => res.send(user))
            .catch(err => console.log(err))
        });
      });
    }
  });
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user
      });
    }

    res.send({
      user,
      token: jwt.sign(user.toJSON(), 'secret')
    })
  }) (req, res)
})

module.exports = router;
