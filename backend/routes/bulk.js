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

router.put('/:bulkId', (req, res) => {
  const bulkToChange = parseInt(req.params.bulkId);
  knex('bulk_rates')
  .where({id: bulkToChange})
  .update(req.body)
  .then(data => res.send('Bulk rate succesfully updated'))
})

module.exports = router;