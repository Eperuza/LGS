const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Employees route')
})

module.exports = router;