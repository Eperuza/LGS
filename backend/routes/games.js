const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])


router.get('/', (req, res) => {
  knex.select('*')
  .from('games')
  .then(data => res.status(200).json(data))
})

module.exports = router;