const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT])

//returns all employees
router.get('/', (req, res) => {
  knex.select('*')
  .from('employees')
  .then(data => res.status(200).json(data))
  .catch('An error occured')
})

//returns an employee by ID
router.get('/:employeeId', (req, res) => {
  const employeeId = req.params.employeeId
  knex.select('*')
  .from('employees')
  .where({id: employeeId})
  .then(data => res.status(200).json(data))
  .catch('An error occured')
})

//create an employee
router.post('/', (req, res) => {
  const newEmployee = req.body;
  knex('employees')
  .insert({...newEmployee})
  .then(data => res.send('employee created').json(newEmployee));
})

//delete an employee
router.delete('/:employeeId', (req, res) => {
  const toDelete = parseInt(req.params.employeeId)
  knex('employees')
  .where({id: toDelete})
  .del()
  .then(data => res.send('Employee succesfully deleted'))
})

//update an employee
router.put('/:employeeId', (req, res) => {
  const toUpdate= parseInt(req.params.employeeId)
  knex('employees')
  .where({id: toUpdate})
  .update(req.body)
  .then(data => res.send('Employee succesfully updated'))
})

module.exports = router;