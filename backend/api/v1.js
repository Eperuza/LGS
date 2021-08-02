const express = require('express');
const router = express.Router();
const customerRouter = require('../routes/customers')
const employeeRouter = require('../routes/employees')
const bulkRouter = require('../routes/bulk')
const gamesRouter = require('../routes/games')
const transactionsRouter = require('../routes/transactions');
const transactionTypesRouter = require ('../routes/transaction_types')

router.get('/', (req, res) => {
  res.send('This is version 1 of the api')
})

router.use('/customers',customerRouter);
router.use('/employees',employeeRouter);
router.use('/bulk', bulkRouter)
router.use('/games', gamesRouter)
router.use('/transactions', transactionsRouter)
router.use('/transaction_types', transactionTypesRouter)

module.exports = router;