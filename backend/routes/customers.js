const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//returns a customer by phone number if provided, otherwise all customers
router.get('/', (req, res) => {
  if(req.query.phone){
  const phoneLookup = req.query.phone;
  return knex.select('*')
  .from('customers')
  .where({phone: phoneLookup})
  .then(data => res.status(200).json(data))
  }

  knex.select('*')
  .from('customers')
  .orderBy('id', 'asc')
  .then(data => res.status(200).json(data))
})

//returns a customer by ID
router.get('/:customerId', (req, res) => {
  const customerId = req.params.customerId
  knex.select('*')
  .from('customers')
  .where({id: customerId})
  .then(data => res.status(200).json(data))
})

//creates a customer
router.post('/new', (req, res) => {
  const newCustomer = req.body;
  knex('customers')
  .insert({...newCustomer})
  .then(data => res.status(201).send('Customer succesfully added'))
})

//delete a customer
router.delete('/:customerId', (req, res) => {
  const toDelete = parseInt(req.params.customerId)
  knex('customers')
  .where({id: toDelete})
  .del()
  .then(data => res.status(204).send('Customer succesfully deleted'))
})

//update a customer
router.put('/:customerId', (req, res) => {
  const toUpdate= parseInt(req.params.customerId)
  knex('customers')
  .where({id: toUpdate})
  .update(req.body)
  .then(data => res.status(202).send('Customer succesfully updated'))
})

module.exports = router;