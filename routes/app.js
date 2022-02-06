const router = require('express').Router();

const apiClientsRouter = require ('./api/clients')
const apiAveragesRouter = require ('./api/averages')

router.use('/clients',apiClientsRouter)
router.use('/averages',apiAveragesRouter)

module.exports = router;