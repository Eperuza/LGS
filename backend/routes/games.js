const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//return all games
router.get('/', (req, res) => {
  knex.select('*')
  .from('games')
  .then(data => res.status(200).json(data))
})

//return game by ID
router.get('/:gameId', (req, res) => {
  const game = parseInt(req.params.gameId);
  knex.select('*')
  .from('games')
  .where({id: game})
  .then(data => res.status(200).json(data))
})

router.put('/:gameId', (req, res) => {
  const toUpdate = parseInt(req.params.gameId)
  knex('games')
  .where({id: toUpdate})
  .update(req.body)
  .then(data => res.status(202).send('Game succesfully updated'))
})

router.post('/new', (req, res) => {
  const newGame = req.body;
  knex('games')
  .insert(newGame)
  .then(data => res.status(201).send('Game succesfully created'))
})

//delete a a bulk category
router.delete('/:gameId', (req, res) => {
  const toDelete = parseInt(req.params.bulkId)
  knex('games')
  .where({id: toDelete})
  .del()
  .then(data => res.status(204).send('Game succesfully deleted'))
})

module.exports = router;