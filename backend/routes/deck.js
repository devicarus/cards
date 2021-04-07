const express = require('express')
const passport = require('passport')

const Deck = require('../models/Deck')

const router = express.Router();

router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const deck = await Deck.findById(req.params.id)

  if (deck && deck.owner.toString() === req.user._id.toString()) {
    res.json(deck) 
  } else {
    res.status(400).json({
      message: "This deck doesn't exist"
    })
  }
})

module.exports = router;
