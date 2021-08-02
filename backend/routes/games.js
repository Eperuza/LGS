const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('games route')
})

module.exports = router;