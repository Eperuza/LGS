const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//get all the transaction types
router.get('/', (req, res) => {
  knex.select('*')
  .from('transaction_types')
  .then(data => res.status(200).json(data))
})

module.exports = router;