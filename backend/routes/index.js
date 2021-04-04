const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send({ message: 'API root' })
});

module.exports = router;
