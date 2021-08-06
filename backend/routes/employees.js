const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//returns all customers
router.get('/', (req, res) => {
  knex.select('*')
  .from('employees')
  .then(data => res.status(200).json(data))
  .catch('An error occured')
})

//returns a customer by ID
router.get('/:employeeId', (req, res) => {
  const employeeId = req.params.employeeId
  knex.select('*')
  .from('employees')
  .where({id: employeeId})
  .then(data => res.status(200).json(data))
  .catch('An error occured')
})

module.exports = router;