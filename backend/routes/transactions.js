const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

router.get('/', (req, res) => {
  knex.select('*')
  .from('transactions')
  .then(data => res.status(200).json(data))
})

router.get('/:customerId', (req, res) => {
  const customerId = req.params.customerId;
  knex.select('*')
  .from('transactions')
  .where({customer_id: customerId})
  .then(data => {
    res.status(200).json(data);
  })
})
module.exports = router;