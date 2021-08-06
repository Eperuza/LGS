const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//returns all customers
router.get('/', (req, res) => {
  knex.select('*')
  .from('customers')
  .then(data => res.status(200).json(data))
  .catch('An error occured')
})

//returns a customer by ID
router.get('/:customerId', (req, res) => {
  const customerId = req.params.customerId
  knex.select('*')
  .from('customers')
  .where({id: customerId})
  .then(data => res.status(200).json(data))
  .catch('An error occured')
})

//creates a customer
router.post('/new', (req, res) => {
  const newCustomer = req.body;
  knex('customers')
  .insert({...newCustomer})
})

module.exports = router;