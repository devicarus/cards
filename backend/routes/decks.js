const express = require('express')
const passport = require('passport')

const Deck = require('../models/Deck')

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const decks = await Deck.find({ owner: req.user._id })
  
  res.json(decks)
})

module.exports = router;
