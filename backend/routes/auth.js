const express = require('express')

const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (user) {
    res.status(400).json({
      message: "Email already exists"
    })
  } else {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)

    const newUser = await new User({
      email: req.body.email,
      password: hash
    }).save()

    res.json(newUser)
  }
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      res.status(500).json({
        message: 'Something is not right',
        user
      })
    } else if (!user) {
      res.status(400).json({
        message: 'Wrong email or password',
        user
      })
    } else {
      res.json({
        token: jwt.sign(user.toJSON(), process.env.JWT_SECRET),
        user
      })
    }
  })(req, res)
})

module.exports = router
