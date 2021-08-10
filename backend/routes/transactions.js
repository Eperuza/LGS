const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//return all transactions
router.get('/', (req, res) => {
  knex.select('*')
  .from('transactions')
  .then(data => res.status(200).json(data))
})

//return all transactions for a specific customer
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

//complete a transaction for a specific customer, get account balance, update it, post transaction

router.post('/:customerId', async (req, res) => {
  const customerId =  req.params.customerId;
  const newTransaction = req.body;
  const amount = req.body.amount;

  knex.select('acc_balance')
  .from('customers')
  .where({id: customerId})
  .then(data => {
    knex('customers')
    .where({id: customerId})
    .update({acc_balance: parseInt(data[0].acc_balance) + parseInt(amount)})
    .then(data => {
      knex('transactions')
      .insert(newTransaction)
      .then(data => res.status(201).send('Transaction succesfully created'))
  })
  
  })
})