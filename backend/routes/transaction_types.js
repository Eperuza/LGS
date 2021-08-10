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

//update a transaction type
router.put('/:typeId', (req, res) => {
  const toUpdate = parseInt(req.params.gameId)
  knex('transaction_types')
  .where({id: toUpdate})
  .update(req.body)
  .then(data => res.status(202).send('Transaction type succesfully updated'))
})

//add a new transaction type
router.post('/new', (req, res) => {
  const newType = req.body;
  knex('transaction_types')
  .insert(newType)
  .then(data => res.status(201).send('TransactionType succesfully created'))
})

//delete a transactiontype
router.delete('/:typeId', (req, res) => {
  const toDelete = parseInt(req.params.typeId)
  knex('transaction_types')
  .where({id: toDelete})
  .del()
  .then(data => res.status(204).send('Transaction Type succesfully deleted'))
})

module.exports = router;