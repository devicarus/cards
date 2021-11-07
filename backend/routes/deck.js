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

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  if (req.body.name === 'undefined' || !req.body.name) {
    res.status(400).json({
      message: "Empty name"
    })
  } else {
    await new Deck({
      name: req.body.name,
      image: req.body.image == 'undefined' ? null : req.body.image,
      owner: req.user._id,
      cards: JSON.parse(req.body.cards).map(card => { if (card.front || card.back) return card })
    }).save()

    res.status(200).json({
      message: "Deck successfuly added"
    })
  }
})

module.exports = router;
