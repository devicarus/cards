const express = require('express')
const fs = require('fs/promises')

const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const isEmail = require('../helpers/isEmail')

const User = require('../models/User')
const Deck = require('../models/Deck')

const router = express.Router()

router.post('/register', async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (!isEmail(req.body.email)) {
    res.status(400).json({
      message: "Not an email"
    })
  } else if (user) {
    res.status(400).json({
      message: "Email already used"
    })
  } else if (req.body.password == "") {
    res.status(400).json({
      message: "Empty password"
    })
  } else {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)

    const newUser = await new User({
      email: req.body.email,
      password: hash
    }).save()

    const exampleDecks = await fs.readdir('./example-decks')
    exampleDecks.map(async deck => {
      await new Deck({
        owner: newUser._id,
        ...require('../example-decks/' + deck)
      }).save()
    })

    res.json(newUser)
  }
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong'
      })
    } else if (user.status == "Pending") {
      res.status(400).json({
        message: 'Email not verified'
      })
    } else if (!user) {
      res.status(400).json({
        message: 'Wrong email or password'
      })
    } else {
      res.json({
        token: jwt.sign(user.toJSON(), process.env.JWT_SECRET),
        user
      })
    }
  })(req, res)
})

router.post('/confirm/:id', async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (user) {
    if (user.status == "Pending") {
      const result = await User.findByIdAndUpdate(req.params.id, { status: "Active" })
      if (result) {
        res.status(200).json({
          message: 'Email successfuly verified'
        })
      } else {
        res.status(500).json({
          message: 'Something went wrong'
        })
      }
    } else {
      res.status(400).json({
        message: 'Email already verified'
      })
    }
  } else {
    res.status(400).json({
      message: 'Account does not exist'
    })
  }
})

module.exports = router
