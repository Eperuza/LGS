const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//return all bulk rates
router.get('/', (req, res) => {
  knex.select('*')
  .from('bulk_rates')
  .then(data => res.status(200).json(data))
})

//get bulk rates for a particular game
router.get('/:gameId', (req, res) =>{
  const game = req.params.gameId;
  knex.select('*')
  .from('bulk_rates')
  .where({game_id: game})
  .then(data => res.status(200).json(data))
})

//update a bulk category
router.put('/:bulkId', (req, res) => {
  const bulkToChange = parseInt(req.params.bulkId);
  knex('bulk_rates')
  .where({id: bulkToChange})
  .update(req.body)
  .then(data => res.status(202).send('Bulk rate succesfully updated'))
})

//create a bulk category
router.post('/new', (req, res) => {
  const newBulk = req.body;
  knex('bulk_rates')
  .insert(newBulk)
  .then(data => res.status(201).send('Bulk rate succesfully created'))
})

//delete a a bulk category
router.delete('/:bulkId', (req, res) => {
  const toDelete = parseInt(req.params.bulkId)
  knex('bulk_rates')
  .where({id: toDelete})
  .del()
  .then(data => res.status(204).send('Bulk succesfully deleted'))
})

module.exports = router;